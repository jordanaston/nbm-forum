import {useQuery} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchLoggedInUserId = async (): Promise<number | null> => {
  const id = await AsyncStorage.getItem('loggedInUserId');
  if (id) {
    return parseInt(id, 10);
  } else {
    return null;
  }
};

export const useLoggedInUserId = (): number | null => {
  const {data: userId} = useQuery<number | null, Error>(
    'loggedInUserId',
    fetchLoggedInUserId,
  );

  return userId ?? null;
};
