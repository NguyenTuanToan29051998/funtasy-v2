import axiosClient from './axios-client'

export const PointsApiManagement = {
  getTotolPoint() {
    return axiosClient.get(`/tap-event/total-points`)
  },
}