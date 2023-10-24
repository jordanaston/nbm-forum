import {useMutation, useQueryClient} from 'react-query';
import {deleteCommentFromPost} from '../../services/FeedServices';

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
      onError: (error: any) => {
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
      onError: (error: any) => {
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
      onError: (error: any) => {
        console.error('Error deleting the comment:', error);
      },
    },
  );
};
