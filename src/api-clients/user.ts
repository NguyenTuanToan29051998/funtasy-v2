import axios from 'axios';
import CryptoJS from 'crypto-js';

const BASE_URL_LOGIN = 'https://login-prod.cattos.io';
const VERSION = '1.0';
const CRYPT_KEY = 'EJZw7z8BHwvgLfdYpr4Ys25svVJewL1G';
const CRYPT_IV = 'npgYxcHZ2PkcypMK';

interface Storage {
  session: string;
  seq: number;
}

interface SystemInfo {
  version: string;
  session: string;
  seq: number;
  timestamp: number;
  sign: string;
}

interface RequestBody {
  _system?: SystemInfo;
  [key: string]: any;
}

interface RequestHeaders {
  [key: string]: string;
}

let storage: Storage = {
  session: '',
  seq: 0,
};

function encrypt(text: string, key: string, iv: string): string {
    // key và iv phải là 32 bytes (256 bit) và 16 bytes (128 bit) tương ứng
    const encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    // Trả về Base64 string
    return encrypted.toString();
  }
  
  function decrypt(encryptedBase64: string, key: string, iv: string): string {
    const decrypted = CryptoJS.AES.decrypt(encryptedBase64, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  
  function createRequestSign(session: string, seq: number, timestamp: number): string {
    const keyStr = 'scGCtSre4pLVwga' + session + seq + timestamp;
    return CryptoJS.MD5(keyStr).toString();
  }
  

async function apiRequest(api: string, body: RequestBody = {}, headers: RequestHeaders = {}): Promise<any> {
  const timestamp = Date.now();
  const sign = createRequestSign(storage.session, storage.seq, timestamp);

  body._system = {
    version: VERSION,
    session: storage.session,
    seq: storage.seq,
    timestamp,
    sign,
  };

  const encryptedBody = encrypt(JSON.stringify(body), CRYPT_KEY, CRYPT_IV);

  const isLogin = api.indexOf('/user/') >= 0;
  const baseUrl = isLogin ? BASE_URL_LOGIN : '';

  try {
    const response = await axios.post(baseUrl + api, 
      Uint8Array.from(atob(encryptedBody), c => c.charCodeAt(0)), 
      {
        headers: {
          'Content-Type': 'application/octet-stream',
          'User-Agent': 'request',
          ...headers,
        },
        responseType: 'arraybuffer',
        validateStatus: (status) => status >= 200 && status < 300, // tương tự response.ok
      }
    );
  
    // response.data là ArrayBuffer
    const buffer = response.data as ArrayBuffer;
    const base64Response = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    const decrypted = decrypt(base64Response, CRYPT_KEY, CRYPT_IV);
    const result = JSON.parse(decrypted);
  
    if (result._system) {
      storage.seq = result._system.seq;
    }
  
    return result;
  } catch (err: any) {
    throw new Error(err.message || 'Request failed');
  }
}

export default apiRequest;