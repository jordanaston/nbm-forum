import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginArgs, LoginResponse} from '../types/Types';

export const postLoginDetails = async ({
  email,
  password,
}: LoginArgs): Promise<LoginResponse> => {
  try {
    const data = await axios.post(
      'https://api.development.forum.mike-automations.link/auth/login',
      {
        email,
        password,
      },
    );

    await AsyncStorage.setItem('loginData', JSON.stringify(data.data));

    return data.data;
  } catch (error) {
    throw error;
  }
};
