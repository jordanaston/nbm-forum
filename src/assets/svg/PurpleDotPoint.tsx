import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants/Colors';

const PurpleDotPoint: React.FC = (): JSX.Element => (
  <Svg width="4" height="5" fill="none">
    <Path
      fill={colors.forumPurple}
      d="M1.999 4.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
);

export default PurpleDotPoint;
