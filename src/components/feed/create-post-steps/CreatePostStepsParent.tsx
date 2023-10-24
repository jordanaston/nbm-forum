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

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const usePostCreationSteps = ({
  navigation,
}: Props): [JSX.Element | null, () => void, number, boolean] => {
  const [currentPostStep, setCurrentPostStep] = useState<number>(0);

  const formik = createPostFormik(currentPostStep, values => {
    if (currentPostStep === 2) {
      createPostMutation.mutate(values);
    } else {
      setCurrentPostStep(prev => prev + 1);
    }
  });

  const createPostMutation = useCreatePostMutation({
    navigation,
    setCurrentPostStep,
    formik,
  });

  const wrappedPostStep = (CreatePostComponent: React.FC) => (
    <FormikContext.Provider value={formik}>
      <CreatePostComponent />
    </FormikContext.Provider>
  );

  const steps = [
    wrappedPostStep(EnterPostDetails),
    wrappedPostStep(SelectACatagory),
    wrappedPostStep(SubmitPost),
  ];

  const goBackOneStep = () => {
    if (currentPostStep === 0) {
      goToFeedScreen({navigation});
    } else if (currentPostStep > 0) {
      setCurrentPostStep(prev => prev - 1);
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
