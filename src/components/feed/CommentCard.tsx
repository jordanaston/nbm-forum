import React, {useState} from 'react';
import {View} from 'react-native';
import {Comment, Post} from '../../types/FeedTypes';
import {Text} from 'react-native-elements';
import PurpleDotPoint from '../../assets/svg/PurpleDotPoint';
import {format} from 'date-fns';
import ReplyList from './ReplyList';
import Input from '../core/Input';
import {colors} from '../../constants/Colors';
import {usePostReplyMutation} from '../../hooks/PostReplyMutation';
import {useDeleteCommentMutation} from '../../hooks/DeleteCommentMutation';
import {useLoggedInUserId} from '../../utils/FetchLoggedInUserIdUtil';
import Button from '../core/Button';

type Props = {
  post: Post;
  comment: Comment;
};

const CommentCard: React.FC<Props> = ({post, comment}: Props): JSX.Element => {
  const loggedInUserId = useLoggedInUserId();

  const postReplyMutation = usePostReplyMutation();

  const [replyText, setReplyText] = useState<string>('');

  const handlePostReply = () => {
    if (replyText.trim().length > 0) {
      postReplyMutation.mutate({
        postId: post.id,
        commentId: comment.id,
        text: replyText,
      });
      setReplyText('');
    }
  };

  const deleteCommentMutation = useDeleteCommentMutation();

  const handleDeleteComment = () => {
    deleteCommentMutation.mutate({
      postId: post.id,
      commentId: comment.id,
    });
  };

  return (
    <View className="mx-6">
      <View className="flex-row mt-2">
        <Text className="font-syne-bold text-[14px] mr-2 opacity-70">
          {comment.user.firstName} {comment.user.lastName}
        </Text>
        <View className="mt-[6.5px]">
          <PurpleDotPoint />
        </View>

        <Text className="text-ForumCharcoal opacity-50 font-syne-regular ml-2">
          {format(new Date(comment.createdAt), 'dd-MM-yyyy')}
        </Text>
        {comment.user.id === loggedInUserId && (
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
      <Text className="font-syne-regular mb-4 mt-2 ml-1">{comment.text}</Text>
      <View className="flex-row">
        <View className="w-[2px] bg-ForumCharcoal opacity-20 left-[8px] absolute top-[-4] bottom-[24px]" />
        <View className="flex-1">
          <ReplyList comment={comment} post={post} />

          <View className="ml-6 mb-2">
            <View className="h-[2px] bg-ForumCharcoal opacity-20 absolute left-[-16px] w-[12px] top-1/2" />
            <Input
              placeholder="Write a reply..."
              onChangeText={text => setReplyText(text)}
              value={replyText}
              textSize="text-[14px]"
              border="none"
              backgroundColor="bg-ForumLightGray"
              placeholderTextColor={colors.forumCharcoal}
              opacity="opacity-none"
              height="h-[33px]"
              onSubmitEditing={handlePostReply}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentCard;
