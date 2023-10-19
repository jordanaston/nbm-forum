import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthTitleDescription from '../components/auth/AuthTitleDescription';
import NbmBackNavBar from '../components/auth/NbmBackNavBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import InputBox from '../components/core/Input';
import Button from '../components/core/Button';
import {useFormik} from 'formik';
import ErrorAlertBox from '../components/core/ErrorAlertBox';
import {loginValidationSchema} from '../validation/LoginValidationSchema';
import {useMutation} from 'react-query';
import {postLoginDetails} from '../services/AuthServices';
import LoadingScreen from './LoadingScreen';
import {RouteProp} from '@react-navigation/native';
import SuccessAlertBox from '../components/core/SuccessAlertBox';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  route: RouteProp<MainStackParamList, 'LoginScreen'>;
};

const LoginScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props): JSX.Element => {
  const goToCreateAccountScreen = () => {
    navigation.navigate('CreateAccountScreen');
  };

  const mutation = useMutation(postLoginDetails, {
    onSuccess: () => {
      navigation.navigate('FeedScreen');
      formik.setStatus(null);
    },
  });

  const [delayedLoading, setDelayedLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    validateOnMount: true,
    onSubmit: async values => {
      setDelayedLoading(true);
      setTimeout(async () => {
        try {
          await mutation.mutateAsync({
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
          setDelayedLoading(false);
        }
      }, 1000);
    },
  });

  const accountCreationSuccess = route.params?.accountCreationSuccess;

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />
      {delayedLoading ? (
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
              <InputBox
                placeholder="you@email.com"
                inputBoxTitle="Email"
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
              <View className="mt-2">
                <InputBox
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
                {formik.touched.email && formik.errors.email ? (
                  <ErrorAlertBox text={formik.errors.email} />
                ) : formik.touched.password && formik.errors.password ? (
                  <ErrorAlertBox text={formik.errors.password} />
                ) : formik.status ? (
                  <ErrorAlertBox text={formik.status} />
                ) : null}
              </View>

              {accountCreationSuccess && (
                <View>
                  <SuccessAlertBox text="Account created successfully! Please log in." />
                </View>
              )}
            </View>
          </View>
          <View className="absolute bottom-10 left-0 right-0 flex-row justify-center">
            <Text className="text-ForumPurple font-syne-regular text-[14px]">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={goToCreateAccountScreen}>
              <Text className="text-ForumPurple font-syne-medium underline ml-[2px] text-[14px]">
                Create one here.
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
