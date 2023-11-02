import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useCreatePostFormik} from '../../../context/CreatePostFormikContext';
import XButtonIcon from '../../../assets/svg/XButtonIcon';
import Button from '../../core/Button';
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

      <View className="mt-10">
        <Text className="text-ForumCharcoal font-syne-bold text-[25px]">
          {formik.values.title}
        </Text>
      </View>
      <View className="mt-6">
        <Text className="text-ForumCharcoal font-syne-regular text-[14px]">
          {formik.values.content}
        </Text>
        <View className="mt-6 flex-row">
          {formik.values.tags.map((tag, index) => (
            <View
              key={index}
              className="justify-center mr-4 bg-ForumPurple h-[30px] px-2">
              <Text className="text-white font-syne-regular text-[14px]">
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SubmitPost;
