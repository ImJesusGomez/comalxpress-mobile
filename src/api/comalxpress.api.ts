import axios from 'axios';
import { useAuthStore } from '../store/auth.store';

const comalXpressApi = axios.create({
  baseURL: 'http://192.168.1.3:3000/comal-xpress/api/v1',
});

comalXpressApi.interceptors.request.use(config => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

comalXpressApi.interceptors.response.use(config => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default comalXpressApi;
