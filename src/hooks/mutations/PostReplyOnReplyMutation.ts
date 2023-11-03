import {useMutation, useQueryClient} from 'react-query';
import {postReplyOnReply} from '../../services/FeedServices';
import {AxiosError} from 'axios';

type Props = {
  postId: number;
  commentId: number;
  text: string;
};

export const usePostReplyOnReplyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({postId, commentId, text}: Props) =>
      postReplyOnReply(postId, commentId, text),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('repliesOnReplies');
      },
      onError: (error: AxiosError) => {},
    },
  );
};
