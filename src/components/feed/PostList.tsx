import React from 'react';
import {View} from 'react-native';
import {getAllPosts} from '../../services/FeedServices';
import {useQuery} from 'react-query';
import StatusMessage from '../core/StatusMessage';
import PostCard from './PostCard';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  selectedTag: string | null;
};

const PostList: React.FC<Props> = ({
  selectedTag,
  navigation,
}: Props): JSX.Element => {
  const {
    data: postDataArray,
    error: postsError,
    isLoading: postsLoading,
  } = useQuery(['posts', selectedTag], () =>
    getAllPosts(selectedTag ? [selectedTag] : []),
  );

  if (postsLoading) {
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
      return <PostCard key={post.id} post={post} navigation={navigation} />;
    });
  };

  return <View>{renderPosts()}</View>;
};

export default PostList;
