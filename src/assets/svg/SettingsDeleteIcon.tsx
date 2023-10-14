import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingsDeleteIcon: React.FC = (): JSX.Element => (
  <Svg width={20} height={24} fill="none">
    <Path
      fill="#6537FF"
      d="M2 21.333C2 22.8 3.2 24 4.667 24h10.666C16.8 24 18 22.8 18 21.333v-16H2v16Zm17.333-20h-4.666L13.333 0H6.667L5.333 1.333H.667V4h18.666V1.333Z"
    />
  </Svg>
);
export default SettingsDeleteIcon;
