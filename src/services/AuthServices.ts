import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LoginArgs,
  LoginResponse,
  UploadImageArgs,
  UploadImageResponse,
} from '../types/Types';
import {nbmApi} from './AxiosInstance';
import {HARDCODED_TOKEN} from '@env';
import axios from 'axios';

export const postLoginDetails = async ({
  email,
  password,
}: LoginArgs): Promise<LoginResponse> => {
  try {
    const {data} = await nbmApi.post('/auth/login', {email, password});
    await AsyncStorage.multiSet([
      ['accessToken', data.accessToken],
      ['loginData', data],
    ]);

    const storedToken = await AsyncStorage.getItem('accessToken');
    console.log('STORED ACCESS TOKEN: ', storedToken);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getAwsUrl = async ({
  fileName,
  folder,
}: UploadImageArgs): Promise<UploadImageResponse> => {
  try {
    const {data} = await nbmApi.get('/files/upload/images/', {
      headers: {
        Authorization: `Bearer ${HARDCODED_TOKEN}`,
      },
      params: {
        fileName,
        folder,
      },
    });

    return data;
  } catch (error: any) {
    throw error;
  }
};

type Props = {
  fileName: string;
  height: number;
  width: number;
};

export const getProfilePicture = async ({fileName, height, width}: Props) => {
  try {
    const {data} = await axios.get('https://api.development.forum.mike-automations.link/files/download/resize', {
      headers: {
        Authorization: `Bearer ${HARDCODED_TOKEN}`,
      },
      params: {
        fileName,
        height,
        width
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};











export const getManyPosts = async () => {
  try {
    const requestBody = {
      page: 1,
      limit: 10,
      tags: [],
    };

    const {data} = await nbmApi.post('/posts/_search', requestBody);
    console.log('GET POSTS: ', JSON.stringify(data.data, null, 3));
    return data.data;
  } catch (error) {
    console.log(error);
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
