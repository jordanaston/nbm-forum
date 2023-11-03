import React, {useState} from 'react';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FormikContext} from '../../../context/CreatePostFormikContext';
import {goToFeedScreen} from '../../../utils/NavigationUtils';
import {useCreatePostMutation} from '../../../hooks/mutations/CreatePostMutation';
import EnterPostDetails from './EnterPostDetails';
import SelectACatagory from './SelectACatagory';
import SubmitPost from './SubmitPost';
import {createPostFormik} from '../../../hooks/formik/CreatePostFormik';
import {CreatePostSteps} from '../../../types/FeedTypes';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const usePostCreationSteps = ({
  navigation,
}: Props): [JSX.Element | null, () => void, CreatePostSteps, boolean] => {
  const [currentPostStep, setCurrentPostStep] =
    useState<CreatePostSteps>('EnterPostDetails');

  const formik = createPostFormik(currentPostStep, values => {
    if (currentPostStep === 'SubmitPost') {
      createPostMutation.mutate(values);
    } else {
      advanceToNextStep(currentPostStep);
    }
  });

  const createPostMutation = useCreatePostMutation({
    navigation,
    setCurrentPostStep,
    formik,
  });

  const wrappedPostStep = (CreatePostComponent: React.FC<Props>) => (
    <FormikContext.Provider value={formik}>
      <CreatePostComponent navigation={navigation} />
    </FormikContext.Provider>
  );

  const steps: {[key in CreatePostSteps]: JSX.Element} = {
    EnterPostDetails: wrappedPostStep(EnterPostDetails),
    SelectACatagory: wrappedPostStep(SelectACatagory),
    SubmitPost: wrappedPostStep(SubmitPost),
  };

  const advanceToNextStep = (current: CreatePostSteps) => {
    switch (current) {
      case 'EnterPostDetails':
        setCurrentPostStep('SelectACatagory');
        break;
      case 'SelectACatagory':
        setCurrentPostStep('SubmitPost');
        break;
      case 'SubmitPost':
        break;
    }
  };

  const goBackOneStep = () => {
    switch (currentPostStep) {
      case 'EnterPostDetails':
        goToFeedScreen({navigation});
        break;
      case 'SelectACatagory':
        setCurrentPostStep('EnterPostDetails');
        break;
      case 'SubmitPost':
        setCurrentPostStep('SelectACatagory');
        break;
    }
    formik.setStatus(null);
  };

  return [
    steps[currentPostStep] || null,
    goBackOneStep,
    currentPostStep,
    createPostMutation.isLoading,
  ];
};
