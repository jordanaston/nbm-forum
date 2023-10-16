import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginArgs, LoginResponse} from '../types/Types';
import { nbmApi } from './AxiosInstance';


export const postLoginDetails = async ({
  email,
  password,
}: LoginArgs): Promise<LoginResponse> => {
  try {
    const {data} = await nbmApi.post('/auth/login', {email, password});
    await AsyncStorage.setItem('accessToken', JSON.stringify(data.accessToken));
    await AsyncStorage.setItem('loginData', JSON.stringify(data));
    console.log("RESPONSE DATA: ", JSON.stringify(data, null, 3))
    return data;
  } catch (error) {
    throw error;
  }
};


export const postCreatedPost = async (title: string, content: string, tags: string[]) => {
  try {
    const { data } = await nbmApi.post('/posts', {
      title,
      content,
      tags,
    });
    return data.data;
  } catch (error) {
    throw error;
  }
};
