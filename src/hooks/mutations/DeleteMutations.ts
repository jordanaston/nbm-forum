import {useMutation, useQueryClient} from 'react-query';
import {deleteCommentFromPost} from '../../services/FeedServices';
import {AxiosError} from 'axios';

type Props = {
  postId: number;
  commentId: number;
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({postId, commentId}: Props) => deleteCommentFromPost(postId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
      },
      onError: (error: AxiosError) => {
        console.error('Error deleting the comment:', error);
      },
    },
  );
};

export const useDeleteReplyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({postId, commentId}: Props) => deleteCommentFromPost(postId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('replies');
      },
      onError: (error: AxiosError) => {
        console.error('Error deleting the comment:', error);
      },
    },
  );
};

export const useDeleteReplyOfReplyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({postId, commentId}: Props) => deleteCommentFromPost(postId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('repliesOnReplies');
      },
      onError: (error: AxiosError) => {
        console.error('Error deleting the comment:', error);
      },
    },
  );
};
