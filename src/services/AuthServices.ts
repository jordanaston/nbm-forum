import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginArgs, LoginResponse} from '../types/LoginTypes';
import {
  DownloadImageArgs,
  DownloadImageResponse,
  UploadImageArgs,
  UploadImageResponse,
} from '../types/ProfilePictureTypes';
import {nbmApi} from './AxiosInstance';
import {HARDCODED_TOKEN} from '@env';
import axios from 'axios';
import {
  CreateAccountArgs,
  CreateAccountResponse,
} from '../types/CreateAccountTypes';

export const postLoginDetails = async ({
  email,
  password,
}: LoginArgs): Promise<LoginResponse> => {
  try {
    const {data} = await nbmApi.post('/auth/login', {email, password});
    await AsyncStorage.multiSet([
      ['accessToken', JSON.stringify(data.accessToken)],
    ]);

    const storedToken = await AsyncStorage.getItem('accessToken');
    console.log('STORED ACCESS TOKEN: ', storedToken);

    return data;
  } catch (error) {
    throw error;
  }
};

export const postCreateAccountDetails = async ({
  firstName,
  lastName,
  email,
  telephone,
  address,
  avatar,
  password,
  confirmPassword,
}: CreateAccountArgs): Promise<CreateAccountResponse> => {
  try {
    const {data} = await nbmApi.post('/auth/register', {
      firstName,
      lastName,
      email,
      telephone,
      address,
      avatar,
      password,
      confirmPassword,
    });
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

export const getProfilePicture = async ({
  fileName,
  height,
  width,
}: DownloadImageArgs): Promise<DownloadImageResponse> => {
  try {
    const {data} = await axios.get(
      'https://api.development.forum.mike-automations.link/files/download/resize',
      {
        headers: {
          Authorization: `Bearer ${HARDCODED_TOKEN}`,
        },
        params: {
          fileName,
          height,
          width,
        },
      },
    );
    return data;
  } catch (error) {
    throw error;
  }
};
