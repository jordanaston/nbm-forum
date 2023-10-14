import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../constants/Colors';

const XButtonIcon: React.FC = (): JSX.Element => {
  return (
    <Svg width={14} height={14}>
      <Path
        fill={Colors.ForumCharcoal}
        d="M0 1.41 1.41 0 7 5.59 12.59 0 14 1.41 8.41 7 14 12.59 12.59 14 7 8.41 1.41 14 0 12.59 5.59 7 0 1.41Z"
      />
    </Svg>
  );
};

export default XButtonIcon;
