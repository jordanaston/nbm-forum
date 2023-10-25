import {useMutation, useQueryClient} from 'react-query';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {FormikProps} from 'formik';
import {goToFeedScreen} from '../../utils/NavigationUtils';
import {Dispatch, SetStateAction} from 'react';
import {postCreatedPost} from '../../services/FeedServices';
import {CreatePostArgs, CreatePostSteps} from '../../types/FeedTypes';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setCurrentPostStep: Dispatch<SetStateAction<CreatePostSteps>>;
  formik: FormikProps<CreatePostArgs>;
};

export const useCreatePostMutation = ({
  navigation,
  setCurrentPostStep,
  formik,
}: Props) => {
  const queryClient = useQueryClient();

  return useMutation(postCreatedPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      goToFeedScreen({navigation});
      setCurrentPostStep('EnterPostDetails');
      formik.resetForm();
    },
    onError: (error: any) => {},
  });
};
