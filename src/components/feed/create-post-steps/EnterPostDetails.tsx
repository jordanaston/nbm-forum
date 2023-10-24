import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useCreatePostFormik} from '../../../context/CreatePostFormikContext';
import XButtonIcon from '../../../assets/svg/XButtonIcon';
import Button from '../../core/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {goToFeedScreen} from '../../../utils/NavigationUtils';
import Input from '../../core/Input';
import {renderErrors} from '../../../utils/RenderErrorsUtil';
import ErrorAlertBox from '../../core/ErrorAlertBox';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const EnterPostDetails: React.FC<Props> = ({
  navigation,
}: Props): JSX.Element => {
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
          disabled={
            !formik.values.title ||
            !!formik.errors.title ||
            !formik.values.content ||
            !!formik.errors.content
          }
        />
      </View>

      <View className="mt-8">
        <Input
          placeholder="Enter post title..."
          textSize="text-[25px]"
          fontStyle="font-syne-bold"
          border=""
          marginLeft=""
          height=""
          opacity=""
          value={formik.values.title}
          onChangeText={formik.handleChange('title')}
          onBlur={formik.handleBlur('title')}
        />
        <View className="mt-4">
          <Input
            placeholder="Enter your body text..."
            textSize="text-[14px]"
            fontStyle="font-syne-medium"
            border=""
            marginLeft=""
            height=""
            opacity=""
            multiline={true}
            value={formik.values.content}
            onChangeText={formik.handleChange('content')}
            onBlur={formik.handleBlur('content')}
          />
        </View>
        <View className="mt-6">
          {errorMessage && <ErrorAlertBox text={errorMessage} />}
        </View>
      </View>
    </View>
  );
};

export default EnterPostDetails;
