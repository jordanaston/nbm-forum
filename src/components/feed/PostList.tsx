import React from 'react';
import {View} from 'react-native';
import StatusMessage from '../core/StatusMessage';
import PostCard from './PostCard';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useGetPostDataQuery from '../../hooks/queries/GetPostDataQuery';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  selectedTag: string | null;
};

const PostList: React.FC<Props> = ({
  selectedTag,
  navigation,
}: Props): JSX.Element => {
  const {postDataArray, postsError, postsLoading, postRefetch} =
    useGetPostDataQuery(selectedTag);

  if (postsLoading && !postDataArray) {
    return (
      <StatusMessage message="Loading Posts..." textColor="text-ForumPurple" />
    );
  }

  if (postsError) {
    return (
      <StatusMessage message="Error Loading Posts" textColor="text-ErrorRed" />
    );
  }

  const renderPosts = () => {
    if (!postDataArray) return null;

    return postDataArray.map(post => {
      return (
        <PostCard
          key={post.id}
          post={post}
          navigation={navigation}
          postRefetch={postRefetch}
        />
      );
    });
  };

  return <View>{renderPosts()}</View>;
};

export default PostList;
