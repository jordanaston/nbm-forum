import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants/Colors';

const LikeIcon: React.FC = (): JSX.Element => (
  <Svg width={22} height={22} viewBox="0 0 29 29">
    <Path
      fill={colors.forumCharcoal}
      d="m14.854 6.083-.354.353-.354-.354a6.5 6.5 0 0 0-9.192 9.192l.354.354L14.5 24.82l9.192-9.192.354-.354a6.5 6.5 0 0 0-9.192-9.191z"
    />
  </Svg>
);
export default LikeIcon;
