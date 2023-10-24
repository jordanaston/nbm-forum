import {useQuery} from 'react-query';
import {getAllPosts} from '../../services/FeedServices';
import {Post} from '../../types/FeedTypes';

type UseQueryReturnType = ReturnType<typeof useQuery>;

type Props = {
  postDataArray: Post[] | undefined;
  postsError: any;
  postsLoading: boolean;
  postRefetch: UseQueryReturnType['refetch'];
};

const useGetPostDataQuery = (selectedTag?: string | null): Props => {
  const {
    data: postDataArray,
    error: postsError,
    isLoading: postsLoading,
    refetch: postRefetch,
  } = useQuery(
    ['posts', selectedTag],
    () => getAllPosts(selectedTag ? [selectedTag] : []),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  );

  return {
    postDataArray,
    postsError,
    postsLoading,
    postRefetch,
  };
};

export default useGetPostDataQuery;
