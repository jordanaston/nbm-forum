import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const nbmApi = axios.create({
  baseURL: 'https://api.development.forum.mike-automations.link',
});

const getToken = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  if (!token) throw new Error('Token is not available');
  return token;
};


nbmApi.interceptors.request.use(async config => {
  const token = await getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export { nbmApi, getToken };
