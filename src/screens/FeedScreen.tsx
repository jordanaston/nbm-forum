import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ForumSearchBar from '../components/feed/ForumSearchBar';
// import TagFilterCarousel from '../components/core/feed/TagFilterCarousel';
import {useState} from 'react';
// import {getManyPosts} from '../services/ForumServices';
// import {Post} from '../types/ForumTypes';
// import PostList from '../components/core/feed/PostList';
import {useQuery} from 'react-query';
import ProfileIcon from '../assets/svg/ProfileIcon';
import PlusIcon from '../assets/svg/PlusIcon';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  goToCreatePostScreen,
  goToSettingsScreen,
} from '../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const FeedScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // const {data: postDataArray, error} = useQuery<Post[]>('posts', getManyPosts);

  // if (error) {
  //   console.error(error);
  //   return (
  //     <View className="h-full justify-center items-center">
  //       <Text>Error Loading Posts</Text>
  //     </View>
  //   );
  // }

  // if (!postDataArray)
  //   return (
  //     <View className="h-full justify-center items-center">
  //       <Text>Loading...</Text>
  //     </View>
  //   );

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
                  <ProfileIcon />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="">
            <ForumSearchBar />
            {/* <TagFilterCarousel
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            /> */}
            <View className="mt-4">
              {/* <PostList
                postDataArray={postDataArray}
                selectedTag={selectedTag}
              /> */}
            </View>
            <View className="h-[5] bg-ForumLightGray -mx-6" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
