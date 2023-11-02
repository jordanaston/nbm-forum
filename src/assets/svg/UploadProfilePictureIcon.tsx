import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants/Colors';

const UploadProfilePictureIcon: React.FC = (): JSX.Element => (
  <Svg width={16} height={16} fill="none">
    <Path
      fill={colors.forumCharcoal}
      d="M14 11v3H2v-3H0v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2ZM3 5l1.41 1.41L7 3.83V12h2V3.83l2.59 2.58L13 5 8 0 3 5Z"
    />
  </Svg>
);
export default UploadProfilePictureIcon;
