import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://staging.mazaady.com/api/v1'
});

apiClient.interceptors.request.use(function (config) {
  config.headers['private-key'] = '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16';
  return config;
});

apiClient.interceptors.response.use(function (response) {
  return response.data.data;
});

export default apiClient;
