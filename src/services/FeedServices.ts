import {
  RequestParams,
  GetPostsArgs,
  Post,
  Tag,
  GetCommentsResponse,
  Comment,
  PostCommentResponse,
  CreatePostArgs,
  CreatePostResponse,
} from '../types/FeedTypes';
import {DeleteResponse, LikeResponse} from '../types/ErrorTypes';
import {nbmApi} from './axios-instance/AxiosInstance';

export const getAllPosts = async (
  tags: string[] = [],
  page = 1,
  limit = 5,
): Promise<Post[]> => {
  try {
    const body: GetPostsArgs = {
      page,
      limit,
      tags,
    };
    const {data} = await nbmApi.post('/posts/_search', body);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTags = async (): Promise<Tag[]> => {
  try {
    const requestParams: RequestParams = {
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

export const getCommentsFromPost = async (
  postId: number,
): Promise<GetCommentsResponse> => {
  try {
    const requestParams: RequestParams = {
      page: 1,
      limit: 10,
    };
    const {data} = await nbmApi.get(`/posts/${postId}/comments`, {
      params: requestParams,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRepliesFromComment = async (
  postId: number,
  commentId: number,
): Promise<Comment[]> => {
  try {
    const requestParams: RequestParams = {
      page: 1,
      limit: 10,
    };
    const {data} = await nbmApi.get(`/posts/${postId}/comments/${commentId}`, {
      params: requestParams,
    });
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getRepliesFromReply = async (
  postId: number,
  commentId: number,
): Promise<Comment[]> => {
  try {
    const requestParams: RequestParams = {
      page: 1,
      limit: 10,
    };
    const {data} = await nbmApi.get(`/posts/${postId}/comments/${commentId}`, {
      params: requestParams,
    });
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const postCommentOnPost = async (
  postId: number,
  text: string,
): Promise<PostCommentResponse> => {
  try {
    const body = {
      text,
    };
    const {data} = await nbmApi.post(`/posts/${postId}/comments/`, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postReplyOnComment = async (
  postId: number,
  commentId: number,
  text: string,
): Promise<PostCommentResponse> => {
  try {
    const body = {
      text,
      commentId,
    };
    const {data} = await nbmApi.post(`/posts/${postId}/comments/`, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postReplyOnReply = async (
  postId: number,
  commentId: number,
  text: string,
): Promise<PostCommentResponse> => {
  try {
    const body = {
      text,
      commentId,
    };
    const {data} = await nbmApi.post(`/posts/${postId}/comments/`, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCommentFromPost = async (
  postId: number,
  commentId: number,
): Promise<DeleteResponse> => {
  try {
    const {data} = await nbmApi.delete(
      `/posts/${postId}/comments/${commentId}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const postLike = async (postId: number): Promise<LikeResponse> => {
  try {
    const {data} = await nbmApi.post(`/posts/${postId}/like`);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLike = async (postId: number): Promise<LikeResponse> => {
  try {
    const {data} = await nbmApi.delete(`/posts/${postId}/like`);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const postCreatedPost = async ({
  title,
  content,
  tags,
}: CreatePostArgs): Promise<CreatePostResponse> => {
  try {
    const body = {
      title,
      content,
      tags,
    };
    const {data} = await nbmApi.post('/posts', body);
    return data.data;
  } catch (error) {
    throw error;
  }
};
