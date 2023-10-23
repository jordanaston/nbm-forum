import {useMutation, useQueryClient} from 'react-query';
import {deleteCommentFromPost} from '../services/FeedServices';

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
        queryClient.invalidateQueries('replies');
      },
    },
  );
};
