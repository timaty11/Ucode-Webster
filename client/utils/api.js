import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const $api = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});

$api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error?.config;
    if (error.response.status === 401) {
      try {
        const response = await axios.get(`${BASE_URL}/api/auth/refresh`, { withCredentials: true });
        localStorage.setItem('token', response.data.accessToken);
        console.log('1')
        return await $api.request(originalRequest);
      } catch (err) {
        // location.href = '/';
        console.log(err);
      }
    }
    throw error;
  }
);

export default $api;
