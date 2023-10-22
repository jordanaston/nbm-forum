import React from 'react';
import {View} from 'react-native';
import {GetCommentsFromPostResponse} from '../../types/FeedTypes';
import {Text} from 'react-native-elements';

import PurpleDotPoint from '../../assets/svg/PurpleDotPoint';
import {format} from 'date-fns';

type Props = {
  comment: GetCommentsFromPostResponse;
};

const CommentCard: React.FC<Props> = ({comment}: Props): JSX.Element => {
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
      </View>
      <Text className="font-syne-regular mb-4 mt-2">{comment.text}</Text>
    </View>
  );
};

export default CommentCard;
