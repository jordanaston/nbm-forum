import React from 'react';
import {View} from 'react-native';
import {Comment, Post} from '../../types/FeedTypes';
import {Text} from 'react-native-elements';
import PurpleDotPoint from '../../assets/svg/PurpleDotPoint';
import {format} from 'date-fns';
import {useDeleteCommentMutation} from '../../hooks/DeleteCommentMutation';
import {useLoggedInUserId} from '../../utils/FetchLoggedInUserIdUtil';
import Button from '../core/Button';

type Props = {
  post: Post;
  reply: Comment;
};

const ReplyCard: React.FC<Props> = ({post, reply}: Props): JSX.Element => {
  const loggedInUserId = useLoggedInUserId();

  const deleteCommentMutation = useDeleteCommentMutation();

  const handleDeleteComment = () => {
    deleteCommentMutation.mutate({
      postId: post.id,
      commentId: reply.id,
    });
  };

  return (
    <View className="mx-6">
      <View className="flex-row mt-2">
        <Text className="font-syne-bold text-[14px] mr-2 opacity-70">
          {reply.user.firstName} {reply.user.lastName}
        </Text>
        <View className="mt-[6.5px]">
          <PurpleDotPoint />
        </View>

        <Text className="text-ForumCharcoal opacity-50 font-syne-regular ml-2">
          {format(new Date(reply.createdAt), 'dd-MM-yyyy')}
        </Text>
        {reply.user.id === loggedInUserId && (
          <View className="ml-2 mt-[2px]">
            <Button
              onPress={handleDeleteComment}
              text="Delete"
              includeArrow={false}
              backgroundColor="none"
              border="none"
              textColor="text-ForumPurple"
              textSize="text-[12px]"
              height=""
              position=""
              position2=""
            />
          </View>
        )}
      </View>
      <Text className="font-syne-regular mb-4 mt-2 ml-1">{reply.text}</Text>
    </View>
  );
};

export default ReplyCard;
