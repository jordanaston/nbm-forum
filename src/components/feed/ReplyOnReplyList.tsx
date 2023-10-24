import React from 'react';
import {View} from 'react-native';
import StatusMessage from '../core/StatusMessage';
import {Comment, Post} from '../../types/FeedTypes';
import ReplyOnReplyCard from './ReplyOnReplyCard';
import useGetReplyOnReplyDataQuery from '../../hooks/queries/GetReplyOnReplyDataQuery';

type Props = {
  post: Post;
  reply: Comment;
};

const ReplyOnReplyList: React.FC<Props> = ({
  post,

  reply,
}: Props): JSX.Element => {
  const {replyOnReplyData, replyOnReplyError, replyOnReplyLoading} =
    useGetReplyOnReplyDataQuery(post.id, reply.id);

  if (replyOnReplyLoading) {
    return (
      <StatusMessage
        message="Loading Replies..."
        textColor="text-ForumPurple"
      />
    );
  }

  if (replyOnReplyError) {
    return (
      <StatusMessage
        message="Error Loading Replies"
        textColor="text-ErrorRed"
      />
    );
  }

  const renderRepliesOfReplies = () => {
    if (!replyOnReplyData) return null;

    return replyOnReplyData.map((replyOnReply: Comment) => {
      return (
        <ReplyOnReplyCard
          key={replyOnReply.id}
          replyOnReply={replyOnReply}
          post={post}
        />
      );
    });
  };

  return <View>{renderRepliesOfReplies()}</View>;
};

export default ReplyOnReplyList;
