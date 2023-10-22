import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {goToFeedScreen} from '../utils/NavigationUtils';
import {colors} from '../constants/Colors';
import ArrowIcon from '../assets/svg/ArrowIcon';
import PostCard from '../components/feed/PostCard';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const PostScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const route = useRoute<RouteProp<MainStackParamList, 'PostScreen'>>();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View className="flex-row justify-between mx-6">
          <TouchableOpacity
            onPress={() => goToFeedScreen({navigation})}
            className="mt-[17px]">
            <View className="rotate-[180deg] mt-[1.5px]">
              <ArrowIcon color={colors.forumCharcoal} width="24" height="24" />
            </View>
          </TouchableOpacity>
          <View>
            <Text className="font-syne-semibold text-ForumCharcoal text-[25px] mt-[15px]">
              Post
            </Text>
          </View>
          <View className="mt-1 w-[28]"></View>
        </View>
        <View>
          <PostCard post={route.params.post} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostScreen;
