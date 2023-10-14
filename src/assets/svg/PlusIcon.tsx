import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants/Colors';

const PlusIcon: React.FC = (): JSX.Element => {
  return (
    <Svg width={32} height={32}>
      <Path
        fill={colors.ForumPurple}
        d="M25.333 17.333h-8v8h-2.666v-8h-8v-2.666h8v-8h2.666v8h8v2.666Z"
      />
    </Svg>
  );
};

export default PlusIcon;
