import {useQuery} from 'react-query';
import {getRepliesFromComment} from '../../services/FeedServices';
import {Comment} from '../../types/FeedTypes';

type Props = {
  replyData: Comment[] | undefined;
  replyError: any;
  replyLoading: boolean;
};

const useGetReplyDataQuery = (postId: number, commentId: number): Props => {
  const {
    data: replyData,
    error: replyError,
    isLoading: replyLoading,
  } = useQuery(['replies', postId, commentId], () =>
    getRepliesFromComment(postId, commentId),
  );

  return {
    replyData,
    replyError,
    replyLoading,
  };
};

export default useGetReplyDataQuery;
