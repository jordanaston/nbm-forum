import {useQuery} from 'react-query';
import {getTermsAndConditions} from '../../services/AuthServices';
import {TermsAndConditionsResponse} from '../../types/CreateAccountTypes';

type Props = {
  termsData: TermsAndConditionsResponse | undefined;
  termsError: any;
  termsLoading: boolean;
};

const useGetTermsAndConditionsQuery = (): Props => {
  const {
    data: termsData,
    error: termsError,
    isLoading: termsLoading,
  } = useQuery('termsAndConditions', getTermsAndConditions);

  return {
    termsData,
    termsError,
    termsLoading,
  };
};

export default useGetTermsAndConditionsQuery;
