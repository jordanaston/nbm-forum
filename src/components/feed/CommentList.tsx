import React from 'react';
import {View} from 'react-native';
import {getCommentsFromPost} from '../../services/FeedServices';
import {useQuery} from 'react-query';
import StatusMessage from '../core/StatusMessage';
import {GetPostsResponse} from '../../types/FeedTypes';
import CommentCard from './CommentCard';

type Props = {
  post: GetPostsResponse;
};

const CommentsList: React.FC<Props> = ({post}: Props): JSX.Element => {
  const {
    data: commentsDataArray,
    error: commentsError,
    isLoading: commentsLoading,
  } = useQuery('comments', () => getCommentsFromPost(post.id));

  console.log(
    'commentsDataArray: ',
    JSON.stringify(commentsDataArray, null, 3),
  );

  if (commentsLoading) {
    return (
      <StatusMessage
        message="Loading Comments..."
        textColor="text-ForumPurple"
      />
    );
  }

  if (commentsError) {
    return (
      <StatusMessage
        message="Error Loading Comments"
        textColor="text-ErrorRed"
      />
    );
  }

  const renderComments = () => {
    if (!commentsDataArray) return null;

    return commentsDataArray.map(comment => {
      return <CommentCard key={comment.id} comment={comment} />;
    });
  };

  return <View>{renderComments()}</View>;
};

export default CommentsList;
