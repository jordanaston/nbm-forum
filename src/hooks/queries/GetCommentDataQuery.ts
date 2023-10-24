import {useQuery} from 'react-query';
import {getCommentsFromPost} from '../../services/FeedServices';
import {GetCommentsResponse} from '../../types/FeedTypes';

type Props = {
  commentData: GetCommentsResponse | undefined;
  commentError: any;
  commentLoading: boolean;
};

const useGetCommentDataQuery = (postId: number): Props => {
  const {
    data: commentData,
    error: commentError,
    isLoading: commentLoading,
  } = useQuery(['comments', postId], () => getCommentsFromPost(postId));

  return {
    commentData,
    commentError,
    commentLoading,
  };
};

export default useGetCommentDataQuery;
