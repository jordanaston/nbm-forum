import {useMutation, useQueryClient} from 'react-query';
import {postCommentOnPost} from '../../services/FeedServices';

type Props = {
  postId: number;
  text: string;
};

export const usePostCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({postId, text}: Props) => postCommentOnPost(postId, text),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
      },
      onError: (error: any) => {},
    },
  );
};
