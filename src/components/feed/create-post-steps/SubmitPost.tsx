import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCreatePostFormik} from '../../../context/CreatePostFormikContext';
import XButtonIcon from '../../../assets/svg/XButtonIcon';
import Button from '../../core/Button';
import {usePostCreationSteps} from './CreatePostStepsParent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {goToFeedScreen} from '../../../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const SubmitPost: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const formik = useCreatePostFormik();

  return (
    <View className="mt-6">
      <View className="flex-row justify-between">
        <View className="justify-center">
          <TouchableOpacity onPress={() => goToFeedScreen({navigation})}>
            <XButtonIcon />
          </TouchableOpacity>
        </View>
        <Button
          onPress={formik.handleSubmit}
          text="Post"
          textSize="text-[14px]"
          height="h-[34px]"
          width="w-[88px]"
        />
      </View>
      <Text>Submit Post</Text>
    </View>
  );
};

export default SubmitPost;
