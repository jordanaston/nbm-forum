import {useMutation, useQueryClient} from 'react-query';
import {postReplyOnComment} from '../../services/FeedServices';
import {AxiosError} from 'axios';

type Props = {
  postId: number;
  commentId: number;
  text: string;
};

export const usePostReplyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({postId, commentId, text}: Props) =>
      postReplyOnComment(postId, commentId, text),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('replies');
      },
      onError: (error: AxiosError) => {},
    },
  );
};
