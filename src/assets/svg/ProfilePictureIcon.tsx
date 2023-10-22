import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants/Colors';
import { View } from 'react-native';

const ProfilePictureIcon: React.FC = (): JSX.Element => {
  return (
    <View className="-ml-[3px]">
      <Svg width={30} height={30} viewBox="0 0 24 24">
        <Path
          fill={colors.forumCharcoal}
          d="M12 2a10 10 0 0 0-7.35 16.76 10 10 0 0 0 14.7 0A10 10 0 0 0 12 2Zm0 18a8 8 0 0 1-5.55-2.25 6 6 0 0 1 11.1 0A8 8 0 0 1 12 20Zm-2-10a2 2 0 1 1 2 2 2 2 0 0 1-2-2Zm8.91 6A8 8 0 0 0 15 12.62a4 4 0 1 0-6 0A8 8 0 0 0 5.09 16 7.92 7.92 0 0 1 4 12a8 8 0 0 1 16 0 7.92 7.92 0 0 1-1.09 4Z"
        />
      </Svg>
    </View>
  );
};

export default ProfilePictureIcon;
