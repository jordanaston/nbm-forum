import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingsPasswordIcon: React.FC = (): JSX.Element => (
  <Svg width={22} height={28} fill="none">
    <Path
      fill="#6537FF"
      d="M19 9.333h-1.333V6.667A6.67 6.67 0 0 0 11 0a6.67 6.67 0 0 0-6.667 6.667v2.666H3A2.674 2.674 0 0 0 .333 12v13.333C.333 26.8 1.533 28 3 28h16c1.467 0 2.667-1.2 2.667-2.667V12c0-1.467-1.2-2.667-2.667-2.667Zm-8 12a2.674 2.674 0 0 1-2.667-2.666C8.333 17.2 9.533 16 11 16c1.467 0 2.667 1.2 2.667 2.667 0 1.466-1.2 2.666-2.667 2.666Zm4.133-12H6.867V6.667A4.137 4.137 0 0 1 11 2.533a4.137 4.137 0 0 1 4.133 4.134v2.666Z"
    />
  </Svg>
);
export default SettingsPasswordIcon;
