import {useInfiniteQuery} from 'react-query';
import {getAllPosts} from '../../services/FeedServices';

const useGetPostDataQuery = (selectedTag?: string | null) => {
  const queryInfo = useInfiniteQuery(
    ['posts', selectedTag],
    ({pageParam = 1}) =>
      getAllPosts(selectedTag ? [selectedTag] : [], pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return undefined;
        return pages.length + 1;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  );

  return {
    ...queryInfo,
    postRefetch: queryInfo.refetch,
  };
};

export default useGetPostDataQuery;
