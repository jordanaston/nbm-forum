import {useMutation} from 'react-query';
import {deleteLike, postLike} from '../services/FeedServices';

export const usePostLikeMutation = () => {
  return useMutation((postId: number) => postLike(postId), {});
};

export const useDeleteLikeMutation = () => {
  return useMutation((postId: number) => deleteLike(postId), {});
};
