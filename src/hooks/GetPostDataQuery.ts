import {useQuery} from 'react-query';
import {getAllPosts} from '../services/FeedServices';
import {Post} from '../types/FeedTypes';

type Props = {
  postDataArray: Post[] | undefined;
  postsError: any;
  postsLoading: boolean;
};

const useGetPostDataQuery = (selectedTag: string | null): Props => {
  const {
    data: postDataArray,
    error: postsError,
    isLoading: postsLoading,
  } = useQuery(['posts', selectedTag], () =>
    getAllPosts(selectedTag ? [selectedTag] : []),
  );

  return {
    postDataArray,
    postsError,
    postsLoading,
  };
};

export default useGetPostDataQuery;
