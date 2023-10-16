import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginArgs, LoginResponse} from '../types/Types';
import {nbmApi} from './AxiosInstance';

export const postLoginDetails = async ({
  email,
  password,
}: LoginArgs): Promise<LoginResponse> => {
  try {
    const {data} = await nbmApi.post('/auth/login', {email, password});
    await AsyncStorage.multiSet([
      ['accessToken', JSON.stringify(data.accessToken)],
      ['loginData', JSON.stringify(data)],
    ]);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postCreatedPost = async (
  title: string,
  content: string,
  tags: string[],
) => {
  try {
    const {data} = await nbmApi.post('/posts', {
      title,
      content,
      tags,
    });
    return data.data;
  } catch (error) {
    throw error;
  }
};
