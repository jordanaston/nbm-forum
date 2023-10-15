import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthTitleDescription from '../components/core/AuthTitleDescription';
import NbmBackNavBar from '../components/core/NbmBackNavBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import AuthInputBox from '../components/core/AuthInputBox';
import Button from '../components/core/Button';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const LoginScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const goToCreateAccountScreen = () => {
    navigation.navigate('CreateAccountScreen');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View className="mx-6">
        <NbmBackNavBar navigation={navigation} />
        <View className="mt-6">
          <AuthTitleDescription
            title={`Log In`}
            description="Enter your details to log into your account."
          />
        </View>
        <View className="mt-10">
          <AuthInputBox
            placeholder="you@email.com"
            inputBoxTitle="Email"
          />

          <View className="mt-2">
            <AuthInputBox
              placeholder="Enter your password"
              inputBoxTitle="Password"
              isPasswordField={true}
            />
          </View>
          <TouchableOpacity className="mt-2 flex items-end">
            <Text className="font-syne-regular text-[14px] text-ForumPurple">
              Forgot your password?
            </Text>
            <View className="w-full mt-10">
              <Button onPress={() => {}} text="Log In" />
            </View>
          </TouchableOpacity>
          <View className="mt-[250px] flex justify-center flex-row">
            <Text className="text-ForumPurple font-syne-regular text-[14px]">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={goToCreateAccountScreen}>
              <Text className="text-ForumPurple font-syne-medium underline underline-offset-1 ml-[2px] text-[14px]">
                Create one here.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
