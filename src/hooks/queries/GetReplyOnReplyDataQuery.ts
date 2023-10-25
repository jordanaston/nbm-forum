import {useQuery} from 'react-query';
import {getRepliesFromReply} from '../../services/FeedServices';
import {Comment} from '../../types/FeedTypes';

type Props = {
  replyOnReplyData: Comment[] | undefined;
  replyOnReplyError: Error | null;
  replyOnReplyLoading: boolean;
};

const useGetReplyOnReplyDataQuery = (
  postId: number,
  commentId: number,
): Props => {
  const {
    data: replyOnReplyData,
    error,
    isLoading: replyOnReplyLoading,
  } = useQuery(['repliesOnReplies', postId, commentId], () =>
    getRepliesFromReply(postId, commentId),
  );

  return {
    replyOnReplyData,
    replyOnReplyError: error instanceof Error ? error : null,
    replyOnReplyLoading,
  };
};

export default useGetReplyOnReplyDataQuery;
