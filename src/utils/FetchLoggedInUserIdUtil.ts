import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

export const useLoggedInUserId = (): number | null => {
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchId = async () => {
      const id = await AsyncStorage.getItem('loggedInUserId');
      if (id) {
        setUserId(parseInt(id, 10));
      } else {
        setUserId(null);
      }
    };
    fetchId();
  }, []);

  return userId;
};
