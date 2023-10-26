import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginArgs, LoginResponse} from '../types/LoginTypes';
import {
  DownloadImageArgs,
  DownloadImageResponse,
  UploadImageArgs,
  UploadImageResponse,
} from '../types/ProfilePictureTypes';
import {nbmApi} from './axios-instance/AxiosInstance';
import {HARDCODED_TOKEN} from '@env';
import axios, {AxiosError} from 'axios';
import {
  CreateAccountArgs,
  TermsAndConditionsResponse,
} from '../types/CreateAccountTypes';
import {User} from '../types/LoginTypes';
import {QueryClient} from 'react-query';

export const postLoginDetails = async ({
  email,
  password,
}: LoginArgs): Promise<LoginResponse> => {
  try {
    const {data} = await nbmApi.post('/auth/login', {email, password});
    await AsyncStorage.multiSet([
      ['accessToken', data.accessToken],
      ['loggedInUserId', String(data.user.id)],
    ]);
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
}: CreateAccountArgs): Promise<User> => {
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
  } catch (error) {
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
    const axiosError = error as AxiosError;

    console.error(
      'Failed to fetch profile picture: ',
      JSON.stringify(axiosError.response?.data || axiosError.message, null, 3),
    );
    throw error;
  }
};

export const getTermsAndConditions =
  async (): Promise<TermsAndConditionsResponse> => {
    try {
      const {data} = await nbmApi.get('/terms-conditions', {});
      return data;
    } catch (error) {
      throw error;
    }
  };

export const logout = async (queryClient: QueryClient): Promise<void> => {
  await AsyncStorage.clear();
  queryClient.clear();
};
