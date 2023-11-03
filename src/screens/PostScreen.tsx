import React, {useState} from 'react';
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
import CommentList from '../components/feed/CommentList';
import useGetPostDataQuery from '../hooks/queries/GetPostDataQuery';
import CommentArrow from '../assets/svg/CommentArrow';
import Input from '../components/core/Input';
import {usePostCommentMutation} from '../hooks/mutations/PostCommentMutation';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const PostScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const route = useRoute<RouteProp<MainStackParamList, 'PostScreen'>>();

  const {postRefetch} = useGetPostDataQuery();

  const postCommentMutation = usePostCommentMutation();

  const [commentText, setCommentText] = useState<string>('');

  const handlePostComment = () => {
    if (commentText.trim().length > 0) {
      postCommentMutation.mutate({
        postId: route.params.post.id,
        text: commentText,
      });
      setCommentText('');
    }
  };

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
          <PostCard
            post={route.params.post}
            navigation={navigation}
            postRefetch={postRefetch}
          />
        </View>
        <View className="mx-6">
          <Text className="text-[16px] font-syne-bold text-ForumCharcoal mt-4 mb-2 ">
            Comments
          </Text>
        </View>
        <CommentList post={route.params.post} />

        <View className="mx-6 mb-10">
          <View className="bg-ForumCharcoal h-[0.5px] mt-6" />
          <View className="h-[34px] flex-row justify-between mt-5">
            <View className="flex-1 justify-center mr-[8px] bg-ForumLightGray">
              <Input
                placeholder="Make a Comment"
                placeholderTextColor={colors.forumCharcoal}
                textSize="text-[14px]"
                fontStyle="font-syne-semibold"
                border="none"
                height="h-[34px]"
                onChangeText={text => setCommentText(text)}
                value={commentText}
                opacity="none"
              />
            </View>

            <TouchableOpacity onPress={handlePostComment}>
              <View className="flex items-center justify-center w-[34px] h-[34px] bg-ForumPurple">
                <View className="rotate-[90deg]">
                  <CommentArrow />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostScreen;
