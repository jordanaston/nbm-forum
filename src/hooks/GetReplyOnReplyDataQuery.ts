import {useQuery} from 'react-query';
import {getRepliesFromReply} from '../services/FeedServices';
import {Comment} from '../types/FeedTypes';

type Props = {
  replyOnReplyData: Comment[] | undefined;
  replyOnReplyError: any;
  replyOnReplyLoading: boolean;
};

const useGetReplyOnReplyDataQuery = (
  postId: number,
  commentId: number,
): Props => {
  const {
    data: replyOnReplyData,
    error: replyOnReplyError,
    isLoading: replyOnReplyLoading,
  } = useQuery(['repliesOnReplies', postId, commentId], () =>
    getRepliesFromReply(postId, commentId),
  );

  return {
    replyOnReplyData,
    replyOnReplyError,
    replyOnReplyLoading,
  };
};

export default useGetReplyOnReplyDataQuery;
