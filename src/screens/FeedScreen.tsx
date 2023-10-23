import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from '../components/feed/SearchBar';
import TagFilterCarousel from '../components/feed/TagFilterCarousel';
import {useState} from 'react';
import ProfileIcon from '../assets/svg/ProfileIcon';
import PlusIcon from '../assets/svg/PlusIcon';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  goToCreatePostScreen,
  goToSettingsScreen,
} from '../utils/NavigationUtils';

import PostList from '../components/feed/PostList';
import {colors} from '../constants/Colors';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const FeedScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mx-6">
          <StatusBar barStyle="dark-content" />
          <View className="flex-row justify-between">
            <Text className="font-syne-semibold text-ForumCharcoal text-[25px] text-left mb-[20px] mt-[15px]">
              Forum
            </Text>

            <View className="flex-row">
              <TouchableOpacity
                onPress={() => goToCreatePostScreen({navigation})}>
                <View className="mt-[13px]">
                  <PlusIcon />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => goToSettingsScreen({navigation})}>
                <View className="mt-[15px] ml-3">
                  <ProfileIcon iconColor={colors.forumPurple} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="">
            <SearchBar />
            <TagFilterCarousel
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
            <View className="h-[5] bg-ForumLightGray -mx-6 mt-4" />
          </View>
        </View>
        <View>
          <PostList selectedTag={selectedTag} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
