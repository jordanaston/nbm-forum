import React, {useState} from 'react';
import {View} from 'react-native';
import {Comment, Post} from '../../types/FeedTypes';
import {Text} from 'react-native-elements';
import PurpleDotPoint from '../../assets/svg/PurpleDotPoint';
import {format} from 'date-fns';
import {useDeleteReplyMutation} from '../../hooks/mutations/DeleteMutations';
import {useLoggedInUserId} from '../../utils/FetchLoggedInUserIdUtil';
import Button from '../core/Button';
import ReplyOnReplyList from './ReplyOnReplyList';
import Input from '../core/Input';
import {colors} from '../../constants/Colors';
import {usePostReplyOnReplyMutation} from '../../hooks/mutations/PostReplyOnReplyMutation';

type Props = {
  post: Post;
  reply: Comment;
};

const ReplyCard: React.FC<Props> = ({post, reply}: Props): JSX.Element => {
  const loggedInUserId = useLoggedInUserId();

  const postReplyOnReplyMutation = usePostReplyOnReplyMutation();

  const [replyOnReplyText, setReplyOnReplyText] = useState<string>('');

  const handlePostReplyOnReply = () => {
    if (replyOnReplyText.trim().length > 0) {
      postReplyOnReplyMutation.mutate({
        postId: post.id,
        commentId: reply.id,
        text: replyOnReplyText,
      });
      setReplyOnReplyText('');
    }
  };

  const deleteReplyMutation = useDeleteReplyMutation();

  const handleDeleteReply = () => {
    deleteReplyMutation.mutate({
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
              onPress={handleDeleteReply}
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

      <View className="flex-row">
        <View className="w-[2px] bg-ForumCharcoal opacity-20 left-[8px] absolute top-[-4] bottom-[24px]" />
        <View className="flex-1 -mr-6">
          <ReplyOnReplyList post={post} reply={reply} />
          <View className="ml-6 mb-2">
            <View className="h-[2px] bg-ForumCharcoal opacity-20 absolute left-[-16px] w-[12px] top-1/2" />
            <Input
              placeholder="Write a reply..."
              onChangeText={text => setReplyOnReplyText(text)}
              value={replyOnReplyText}
              textSize="text-[14px]"
              border="none"
              backgroundColor="bg-ForumLightGray"
              placeholderTextColor={colors.forumCharcoal}
              opacity="opacity-none"
              height="h-[33px]"
              onSubmitEditing={handlePostReplyOnReply}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReplyCard;
