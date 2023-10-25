import React, {useMemo} from 'react';
import {View} from 'react-native';
import StatusMessage from '../core/StatusMessage';
import PostCard from './PostCard';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useGetPostDataQuery from '../../hooks/queries/GetPostDataQuery';
import Button from '../core/Button';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  selectedTag: string | null;
};

const PostList: React.FC<Props> = ({
  selectedTag,
  navigation,
}: Props): JSX.Element => {
  const {data, error, isLoading, fetchNextPage, hasNextPage, postRefetch} =
    useGetPostDataQuery(selectedTag);

  const allPosts = useMemo(() => {
    if (!data || !data.pages) return [];
    return data.pages.flat();
  }, [data]);

  if (isLoading && allPosts.length === 0) {
    return (
      <StatusMessage message="Loading Posts..." textColor="text-ForumPurple" />
    );
  }

  if (error) {
    return (
      <StatusMessage message="Error Loading Posts" textColor="text-ErrorRed" />
    );
  }

  const renderPosts = () => {
    return allPosts.map(post => {
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

  return (
    <View>
      {renderPosts()}
      {hasNextPage && (
        <View className="mt-2">
          <Button
            text="Load more posts..."
            onPress={() => fetchNextPage()}
            backgroundColor=""
            textColor="text-ForumCharcoal opacity-70"
            border=""
            includeArrow={false}
            fontStyle="font-syne-semibold"
          />
        </View>
      )}
    </View>
  );
};

export default PostList;
