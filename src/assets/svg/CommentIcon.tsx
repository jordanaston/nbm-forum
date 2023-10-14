import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants/Colors';

const CommentIcon: React.FC = (): JSX.Element => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H4L2 16V2H18V14Z"
        fill={colors.forumCharcoal}
      />
    </Svg>
  );
};

export default CommentIcon;
