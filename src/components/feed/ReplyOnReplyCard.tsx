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
  replyOnReply: Comment;
};

const ReplyOnReplyCard: React.FC<Props> = ({
  post,
  replyOnReply,
}: Props): JSX.Element => {
  const loggedInUserId = useLoggedInUserId();

  const deleteCommentMutation = useDeleteCommentMutation();

  const handleDeleteReplyOfReply = () => {
    deleteCommentMutation.mutate({
      postId: post.id,
      commentId: replyOnReply.id,
    });
  };

  return (
    <View className="mx-6">
      <View className="flex-row mt-2">
        <Text className="font-syne-bold text-[14px] mr-2 opacity-70">
          {replyOnReply.user.firstName} {replyOnReply.user.lastName}
        </Text>
        <View className="mt-[6.5px]">
          <PurpleDotPoint />
        </View>

        <Text className="text-ForumCharcoal opacity-50 font-syne-regular ml-2">
          {format(new Date(replyOnReply.createdAt), 'dd-MM-yyyy')}
        </Text>
        {replyOnReply.user.id === loggedInUserId && (
          <View className="ml-2 mt-[2px]">
            <Button
              onPress={handleDeleteReplyOfReply}
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
      <Text className="font-syne-regular mb-4 mt-2 ml-1">
        {replyOnReply.text}
      </Text>
    </View>
  );
};

export default ReplyOnReplyCard;
