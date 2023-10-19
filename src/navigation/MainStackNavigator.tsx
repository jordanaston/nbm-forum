import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import LoadingScreen from '../screens/LoadingScreen';
import FeedScreen from '../screens/FeedScreen';
import PostScreen from '../screens/PostScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type MainStackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  LoginScreen: {
    accountCreationSuccess?: boolean;
  };
  LoadingScreen: undefined;
  FeedScreen: undefined;
  PostScreen: undefined;
  CreatePostScreen: undefined;
  CreateAccountScreen: undefined;
  SettingsScreen: undefined;
};

const MainStackNavigator: React.FC = (): JSX.Element => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
