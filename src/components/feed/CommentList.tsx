import React from 'react';
import {View} from 'react-native';
import StatusMessage from '../core/StatusMessage';
import {Comment, Post} from '../../types/FeedTypes';
import CommentCard from './CommentCard';
import useGetCommentDataQuery from '../../hooks/GetCommentDataQuery';

type Props = {
  post: Post;
};

const CommentsList: React.FC<Props> = ({post}: Props): JSX.Element => {
  const {commentData, commentError, commentLoading} = useGetCommentDataQuery(
    post.id,
  );

  if (commentLoading) {
    return (
      <StatusMessage
        message="Loading Comments..."
        textColor="text-ForumPurple"
      />
    );
  }

  if (commentError) {
    return (
      <StatusMessage
        message="Error Loading Comments"
        textColor="text-ErrorRed"
      />
    );
  }

  const renderComments = () => {
    if (!commentData || !commentData.data) return null;

    return commentData.data.map((comment: Comment) => {
      return <CommentCard key={comment.id} comment={comment} />;
    });
  };

  return <View>{renderComments()}</View>;
};

export default CommentsList;
