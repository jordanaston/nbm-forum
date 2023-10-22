import {
  GetPostsArgs,
  GetPostsResponse,
  GetTagsArgs,
  GetTagsResponse,
  Tag,
} from '../types/FeedTypes';
import {nbmApi} from './axios-instance/AxiosInstance';

export const getAllPosts = async (
  tags: string[] = [],
): Promise<GetPostsResponse[]> => {
  try {
    const requestBody: GetPostsArgs = {
      page: 1,
      limit: 40,
      tags,
    };

    const {data} = await nbmApi.post('/posts/_search', requestBody);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTags = async (): Promise<GetTagsResponse[]> => {
  try {
    const requestParams: GetTagsArgs = {
      page: 1,
      limit: 10,
    };
    const {data} = await nbmApi.get('/tags', {params: requestParams});

    return data.data.reduce((filteredTagData: Tag[], currentTag: Tag) => {
      if (currentTag.name !== 'tag1' && currentTag.name !== 'tag2') {
        const capitalizedTagName = currentTag.name
          .split(' ')
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(' ');

        filteredTagData.push({...currentTag, name: capitalizedTagName});
      }
      return filteredTagData;
    }, []);
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
