import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { colors } from '../../constants/Colors';

export interface Props {
  color: string;
  width: string;
  height: string;
}

const ArrowIcon: React.FC<Props> = ({
  color,
  width,
  height,
}: Props): JSX.Element => (
  <Svg width={width} height={height} viewBox="0 0 19 19">
    <Path
      d="M11.75 4.25L10.6925 5.3075L14.1275 8.75H2V10.25H14.1275L10.685 13.6925L11.75 14.75L17 9.5L11.75 4.25Z"
      fill={color}
    />
  </Svg>
);

export default ArrowIcon;
