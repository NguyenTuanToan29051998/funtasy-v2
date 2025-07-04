import axios from 'axios';

const baseUrl = 'https://fpoint.cattos.io/v1/';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const tokenObject = JSON.parse(localStorage.getItem('x_token') || '{}');
    if (tokenObject) config.headers.Authorization = `Bearer ${tokenObject.access_token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;

    if (
      error.response.request.responseURL.includes('/refresh-tokens') ||
      error.response.request.responseURL.includes('/login')
    )
      return;

    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const refreshResponse = await axiosInstance.post('auth/refresh-tokens', {
            refreshToken,
          });

          const newToken = refreshResponse.data.tokens.access.token;
          const newRefreshToken = refreshResponse.data.tokens.refresh.token;
          localStorage.setItem('token', newToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          originalConfig.headers.Authorization = `Bearer ${newToken}`;

          return axiosInstance(originalConfig);
        } else {
          window.location.href = '/login';
        }
      } catch (err) {
        console.error('Refresh token error:', err);
        window.location.href = '/login';
      }
    }

    if (error.response.status === 429) {
      await new Promise((resolve) => setTimeout(resolve, 100000));

      return axiosInstance(originalConfig);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
