import React from 'react';
import {View} from 'react-native';
import {Comment} from '../../types/FeedTypes';
import {Text} from 'react-native-elements';
import PurpleDotPoint from '../../assets/svg/PurpleDotPoint';
import {format} from 'date-fns';

type Props = {
  reply: Comment;
};

const ReplyCard: React.FC<Props> = ({reply}: Props): JSX.Element => {
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
      </View>
      <Text className="font-syne-regular mb-4 mt-2 ml-1">{reply.text}</Text>
    </View>
  );
};

export default ReplyCard;
