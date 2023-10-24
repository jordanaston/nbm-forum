import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthTitleDescription from '../components/auth/AuthTitleDescription';
import NbmBackNavBar from '../components/auth/NbmBackNavBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import Input from '../components/core/Input';
import Button from '../components/core/Button';
import ErrorAlertBox from '../components/core/ErrorAlertBox';
import LoadingScreen from './LoadingScreen';
import {RouteProp} from '@react-navigation/native';
import SuccessAlertBox from '../components/core/SuccessAlertBox';
import {useLoginFormik} from '../hooks/formik/LoginFormik';
import DontHaveAccountCreateOneHere from '../components/auth/DontHaveAccountCreateOneHere';
import {useLoginMutation} from '../hooks/mutations/LoginMutation';
import {sleep} from '../utils/SleepUtil';
import {renderErrors} from '../utils/RenderErrorsUtil';
import {renderSuccesses} from '../utils/RenderSuccessesUtil';
import {useRoute} from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const LoginScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const loginMutation = useLoginMutation({navigation});
  const {accountCreationSuccess} =
    useRoute<RouteProp<MainStackParamList, 'LoginScreen'>>().params || {};

  const formik = useLoginFormik({
    onSubmit: async values => {
      formik.setSubmitting(true);
      try {
        await sleep(2000);
        await loginMutation.mutateAsync({
          email: values.email,
          password: values.password,
        });
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          formik.setStatus('Incorrect password for this email.');
        } else {
          formik.setStatus('An unexpected error occurred.');
        }
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  const errorMessage = renderErrors({
    touched: formik.touched,
    errors: formik.errors,
    status: formik.status,
  });

  const successMessage = renderSuccesses({
    touched: formik.touched,
    errors: formik.errors,
    status: formik.status,
  });

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />
      {loginMutation.isLoading || formik.isSubmitting ? (
        <LoadingScreen />
      ) : (
        <>
          <View className="mx-6">
            <NbmBackNavBar navigation={navigation} backToWelcome={true} />
            <View className="mt-6">
              <AuthTitleDescription
                title={`Log In`}
                description="Enter your details to log into your account."
              />
            </View>
            <View className="mt-10">
              <Input
                placeholder="you@email.com"
                inputBoxTitle="Email"
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
              <View className="mt-2">
                <Input
                  placeholder="Enter your password"
                  inputBoxTitle="Password"
                  isPasswordField={true}
                  value={formik.values.password}
                  onChangeText={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                />
              </View>
              <TouchableOpacity className="mt-2 flex items-end">
                <Text className="font-syne-regular text-[14px] text-ForumPurple">
                  Forgot your password?
                </Text>
              </TouchableOpacity>
              <View className="w-full mt-10">
                <Button
                  onPress={formik.handleSubmit}
                  disabled={!formik.isValid || formik.isSubmitting}
                  text="Log In"
                />
              </View>
              <View className="mt-8">
                {errorMessage && <ErrorAlertBox text={errorMessage} />}
              </View>

              {accountCreationSuccess && successMessage && (
                <SuccessAlertBox text="Account created successfully! Please log in." />
              )}
            </View>
          </View>
          <View className="absolute bottom-10 left-0 right-0 flex-row justify-center">
            <DontHaveAccountCreateOneHere navigation={navigation} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
