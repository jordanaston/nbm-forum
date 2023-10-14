import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingsPersonalIcon: React.FC = (): JSX.Element => (
  <Svg width={22} height={22} fill="none">
    <Path
      fill="#6537FF"
      d="M11 11a5.332 5.332 0 0 0 5.333-5.333A5.332 5.332 0 0 0 11 .333a5.332 5.332 0 0 0-5.333 5.334A5.332 5.332 0 0 0 11 11Zm0 2.667C7.44 13.667.333 15.454.333 19v2.667h21.334V19c0-3.546-7.107-5.333-10.667-5.333Z"
    />
  </Svg>
);
export default SettingsPersonalIcon;
