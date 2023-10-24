import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {useCreatePostFormik} from '../../../context/CreatePostFormikContext';
import XButtonIcon from '../../../assets/svg/XButtonIcon';
import Button from '../../core/Button';
import {goToFeedScreen} from '../../../utils/NavigationUtils';
import CatagoryOptions from '../CatagoryOptions';
import {renderErrors} from '../../../utils/RenderErrorsUtil';
import ErrorAlertBox from '../../core/ErrorAlertBox';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const SelectACatagory: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const formik = useCreatePostFormik();

  const errorMessage = renderErrors({
    touched: formik.touched,
    errors: formik.errors,
    status: formik.status,
  });

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
          disabled={!formik.values.tags || !!formik.errors.tags}
        />
      </View>
      <View className="mt-10">
        <CatagoryOptions />
      </View>
      <View className="mt-6">
        {errorMessage && <ErrorAlertBox text={errorMessage} />}
      </View>
    </View>
  );
};

export default SelectACatagory;
