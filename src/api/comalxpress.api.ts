import axios from 'axios';
import { appStorage } from '../store/app.store';

const comalXpressApi = axios.create({
  baseURL: 'http://192.168.1.8:3000/comal-xpress/api/v1',
});

comalXpressApi.interceptors.request.use(config => {
  const token = appStorage.getString('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

comalXpressApi.interceptors.response.use(config => {
  const token = appStorage.getString('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default comalXpressApi;
