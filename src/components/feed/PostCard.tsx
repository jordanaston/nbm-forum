import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Post} from '../../types/FeedTypes';
import {Text} from 'react-native-elements';
import CommentIcon from '../../assets/svg/CommentIcon';
import PurpleDotPoint from '../../assets/svg/PurpleDotPoint';
import {format} from 'date-fns';
import Button from '../core/Button';
import {useLoggedInUserId} from '../../utils/FetchLoggedInUserIdUtil';
import LikeIcon from '../../assets/svg/LikeIcon';
import {goToPostScreen} from '../../utils/NavigationUtils';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useGetCommentDataQuery from '../../hooks/GetCommentDataQuery';
import {Image} from 'react-native';
import {fetchResizedAvatar} from '../../utils/AvatarUtils';
import {colors} from '../../constants/Colors';
import ProfileIcon from '../../assets/svg/ProfileIcon';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  post: Post;
};

const PostCard: React.FC<Props> = ({navigation, post}: Props): JSX.Element => {
  const loggedInUserId = useLoggedInUserId();

  const {commentData, commentLoading} = useGetCommentDataQuery(post.id);

  const {data: resizedAvatar} = fetchResizedAvatar(post.user.avatar);

  const [avatarLoadError, setAvatarLoadError] = useState<boolean>(false);

  return (
    <TouchableOpacity onPress={() => goToPostScreen({navigation, post})}>
      <View className="mx-6">
        <View className="flex-row items-center text-[14px] text-ForumCharcoal mt-4">
          <View className="mr-2">
            {resizedAvatar && !avatarLoadError ? (
              <Image
                source={{uri: resizedAvatar}}
                style={{width: 28, height: 28, borderRadius: 14}}
                onError={() => setAvatarLoadError(true)}
              />
            ) : (
              <View className="opacity-60 -ml-[2px]">
                <ProfileIcon iconColor={colors.forumCharcoal} />
              </View>
            )}
          </View>
          <View className="flex-row">
            <Text className="font-syne-bold mr-2 opacity-70">
              {post.user.firstName} {post.user.lastName}
            </Text>
            <View className="mt-[6.5px]">
              <PurpleDotPoint />
            </View>

            <Text className="ml-2 font-syne-regular opacity-50">
              {format(new Date(post.createdAt), 'dd-MM-yyyy')}
            </Text>
          </View>

          {post.user.id === loggedInUserId && (
            <View className="flex-1 items-end opacity-80">
              <Button
                onPress={() => {}}
                text="Edit"
                underline="underline"
                includeArrow={false}
                backgroundColor="bg-none"
                border="border-none"
                textColor="text-ForumPurple"
                textSize="text-[14px]"
                position=""
                position2=""
                height=""
              />
            </View>
          )}
        </View>
        <Text className="font-syne-semibold text-ForumCharcoal mt-3 text-[25px]">
          {post.title}
        </Text>
        <View className="flex-row my-3">
          {post.tags.map(tag => {
            return (
              <View key={tag.name}>
                <Text className="mr-2 text-white bg-ForumPurple px-2 py-1 font-syne-regular ">
                  {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
                </Text>
              </View>
            );
          })}
        </View>
        <Text className="text-ForumCharcoal font-syne-regular font-[14px]">
          {post.content}
        </Text>
        <View className="flex-row items-center my-4">
          <View className="flex-row items-center mr-2.5">
            <View className="mt-[3px] opacity-90">
              <CommentIcon />
            </View>
            <Text className="ml-1 my-1 text-[10px] text-ForumCharcoal">
              {commentLoading ? '' : commentData ? commentData.total : ''}
            </Text>
          </View>
          <View className="flex-row items-center">
            <View className="opacity-70">
              <LikeIcon />
            </View>
            <Text className="ml-0.5 my-1 text-[10px] text-ForumCharcoal">
              {post.likes}
            </Text>
          </View>
        </View>
      </View>
      <View className="h-[5] bg-ForumLightGray -mx-6" />
    </TouchableOpacity>
  );
};

export default PostCard;
