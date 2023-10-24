import {useMutation} from 'react-query';
import {postCreateAccountDetails} from '../../services/AuthServices';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {FormikProps} from 'formik';
import {CreateAccountArgs} from '../../types/CreateAccountTypes';
import {goToFeedScreen, goToLoginScreen} from '../../utils/NavigationUtils';
import {Dispatch, SetStateAction} from 'react';
import {postCreatedPost} from '../../services/FeedServices';
import {CreatePostArgs} from '../../types/FeedTypes';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setCurrentPostStep: Dispatch<SetStateAction<number>>;
  formik: FormikProps<CreatePostArgs>;
};

export const useCreatePostMutation = ({
  navigation,
  setCurrentPostStep,
  formik,
}: Props) => {
  return useMutation(postCreatedPost, {
    onSuccess: () => {
      goToFeedScreen({navigation});
      setCurrentPostStep(0);
      formik.resetForm();
    },
    onError: (error: any) => {},
  });
};
