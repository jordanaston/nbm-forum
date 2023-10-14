import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingsLocationIcon: React.FC = (): JSX.Element => (
  <Svg width={20} height={28} fill="none">
    <Path
      fill="#6537FF"
      d="M10 .667A9.327 9.327 0 0 0 .667 10C.667 17 10 27.333 10 27.333S19.333 17 19.333 10A9.326 9.326 0 0 0 10 .667Zm0 12.666a3.335 3.335 0 0 1 0-6.667 3.335 3.335 0 0 1 0 6.667Z"
    />
  </Svg>
);
export default SettingsLocationIcon;
