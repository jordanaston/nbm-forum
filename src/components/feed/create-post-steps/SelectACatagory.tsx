import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {useCreatePostFormik} from '../../../context/CreatePostFormikContext';
import {usePostCreationSteps} from './CreatePostStepsParent';
import XButtonIcon from '../../../assets/svg/XButtonIcon';
import Button from '../../core/Button';
import {goToFeedScreen} from '../../../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const SelectACatagory: React.FC<Props> = ({navigation}: Props): JSX.Element => {
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
          text="Next"
          textSize="text-[14px]"
          height="h-[34px]"
          width="w-[88px]"
        />
      </View>
      <Text>Select A Catagory</Text>
    </View>
  );
};

export default SelectACatagory;
