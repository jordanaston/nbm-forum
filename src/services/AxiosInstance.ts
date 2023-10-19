import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const nbmApi = axios.create({
  baseURL: 'https://api.development.forum.mike-automations.link',
});

nbmApi.interceptors.request.use(async config => {
  if (!config.headers.Authorization) {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export {nbmApi};
