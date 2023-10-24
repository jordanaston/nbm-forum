import React from 'react';
import {View} from 'react-native';
import StatusMessage from '../core/StatusMessage';
import {Comment, Post} from '../../types/FeedTypes';
import useGetReplyDataQuery from '../../hooks/queries/GetReplyDataQuery';
import ReplyCard from './ReplyCard';

type Props = {
  comment: Comment;
  post: Post;
};

const ReplyList: React.FC<Props> = ({post, comment}: Props): JSX.Element => {
  const {replyData, replyError, replyLoading} = useGetReplyDataQuery(
    post.id,
    comment.id,
  );

  if (replyLoading) {
    return (
      <StatusMessage
        message="Loading Replies..."
        textColor="text-ForumPurple"
      />
    );
  }

  if (replyError) {
    return (
      <StatusMessage
        message="Error Loading Replies"
        textColor="text-ErrorRed"
      />
    );
  }

  const renderReplies = () => {
    if (!replyData) return null;

    return replyData.map((reply: Comment) => {
      return <ReplyCard key={reply.id} reply={reply} post={post} />;
    });
  };

  return <View>{renderReplies()}</View>;
};

export default ReplyList;
