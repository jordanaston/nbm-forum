import {useQuery} from 'react-query';
import {getTermsAndConditions} from '../../services/AuthServices';
import {TermsAndConditionsResponse} from '../../types/CreateAccountTypes';

type Props = {
  termsData: TermsAndConditionsResponse | undefined;
  termsError: Error | null;
  termsLoading: boolean;
};

const useGetTermsAndConditionsQuery = (): Props => {
  const {
    data: termsData,
    error,
    isLoading: termsLoading,
  } = useQuery('termsAndConditions', getTermsAndConditions);

  return {
    termsData,
    termsError: error instanceof Error ? error : null,
    termsLoading,
  };
};

export default useGetTermsAndConditionsQuery;
