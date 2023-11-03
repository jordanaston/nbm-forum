import {useMutation, useQueryClient} from 'react-query';
import {deleteLike, postLike} from '../../services/FeedServices';

export const usePostLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((postId: number) => postLike(postId), {
    onSuccess: () => {
      queryClient.refetchQueries('posts');
    },
  });
};

export const useDeleteLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((postId: number) => deleteLike(postId), {
    onSuccess: () => {
      queryClient.refetchQueries('posts');
    },
  });
};
