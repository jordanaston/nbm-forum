import {useQuery} from 'react-query';
import {getCommentsFromPost} from '../../services/FeedServices';
import {GetCommentsResponse} from '../../types/FeedTypes';

type Props = {
  commentData: GetCommentsResponse | undefined;
  commentError: Error | null;
  commentLoading: boolean;
};

const useGetCommentDataQuery = (postId: number): Props => {
  const {
    data: commentData,
    error,
    isLoading: commentLoading,
  } = useQuery(['comments', postId], () => getCommentsFromPost(postId));

  return {
    commentData,
    commentError: error instanceof Error ? error : null,
    commentLoading,
  };
};

export default useGetCommentDataQuery;
