import {nbmApi} from './AxiosInstance';
import axios from 'axios';

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