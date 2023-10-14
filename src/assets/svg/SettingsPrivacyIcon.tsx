import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingsPrivacyIcon: React.FC = (): JSX.Element => (
  <Svg width={30} height={24} fill="none">
    <Path
      fill="#6537FF"
      d="M22.333.667c-2.6 0-5.4.533-7.333 2-1.933-1.467-4.733-2-7.333-2-2.6 0-5.4.533-7.334 2V22.2c0 .867.974.6 1 .6 1.8-.867 4.4-1.467 6.334-1.467 2.6 0 5.4.534 7.333 2 1.8-1.133 5.067-2 7.333-2 2.2 0 4.467.4 6.334 1.4.546.28 1-.253 1-.6V2.667c-1.987-1.494-4.84-2-7.334-2ZM27 19.333c-1.467-.466-3.067-.666-4.667-.666-2.266 0-5.533.866-7.333 2V5.332c1.8-1.133 5.067-2 7.333-2 1.6 0 3.2.2 4.667.667v15.333Z"
    />
  </Svg>
);
export default SettingsPrivacyIcon;
