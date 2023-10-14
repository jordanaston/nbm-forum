import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingsArrowIcon: React.FC = (): JSX.Element => (
  <Svg width={10} height={16} fill="none">
    <Path
      fill="#383939"
      d="M.586 14.172 1.914 15.5l7.5-7.5-7.5-7.5L.586 1.827 6.76 8 .586 14.172Z"
    />
  </Svg>
);
export default SettingsArrowIcon;
