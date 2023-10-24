import {useQuery} from 'react-query';
import {getAllTags} from '../../services/FeedServices';
import {Tag} from '../../types/FeedTypes';

type Props = {
  tagData: Tag[] | undefined;
  tagError: any;
  tagLoading: boolean;
};

const useGetTagDataQuery = (): Props => {
  const {
    data: tagData,
    error: tagError,
    isLoading: tagLoading,
  } = useQuery('tags', getAllTags, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return {
    tagData,
    tagError,
    tagLoading,
  };
};

export default useGetTagDataQuery;
