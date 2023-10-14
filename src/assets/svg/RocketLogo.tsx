import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export interface Props {
  color: string;
  width: string;
  height: string;
}

const RocketLogo: React.FC<Props> = ({
  color,
  width,
  height,
}: Props): JSX.Element => (
  <Svg width={width} height={height} viewBox="0 0 119.787 178.834">
    <Path
      d="M119.606,135.343c-3.534-15.09-20.911-37.261-23.721-40.775C90.478,79.147,80.943,55.233,72.1,49.07l-.032-16.893a53.281,53.281,0,0,0-3.792-19.729l-.42-1.253L64.819,3.534a5.6,5.6,0,0,0-10.413.013l-3.01,7.41-.368,1.376a53.676,53.676,0,0,0-3.766,19.89l.032,16.944c-8.8,6.279-18.2,30.136-23.54,45.536C20.95,98.23,3.682,120.582,.168,135.569L0,136.337l.194.762c2.778,10.814,27.959,12.364,43.2,12.3l.006,2.384a5.185,5.185,0,0,0,2.119,4.147,14.854,14.854,0,0,0,3.023,1.751l.013,6.505-3.379,12.119,6.486,1.557a36.2,36.2,0,0,0,16.8-.032l6.486-1.576-3.424-12.1-.013-6.654a14.86,14.86,0,0,0,2.842-1.731,5.077,5.077,0,0,0,1.776-2.681,5.2,5.2,0,0,0,.181-1.35l-.006-2.4c15.174.026,40.375-1.589,43.262-12.351l.026-.11.194-.762ZM62.681,15.891a45.546,45.546,0,0,1,1.253,4.593,7.972,7.972,0,0,0-4.173-1.2,8.174,8.174,0,0,0-4.651,1.563A49.969,49.969,0,0,1,56.576,15.9a8.5,8.5,0,0,1,6.1-.013M59.787,31.253C61.357,31.253,58.6,31.26,59.787,31.253ZM54.729,81.221,64.858,81.2l.2,71.376-.045.006-10.052.013ZM6.7,136.1l.006-.026m58.353,25.866c-.3.052-.581.123-.879.168-.762.1-1.531.142-2.3.194a30.841,30.841,0,0,1-3.786,0c-.724-.045-1.447-.078-2.171-.174-.31-.039-.607-.123-.917-.168l-.013-2.9,10.026-.013.039-.006Zm11.234-19.083"
      fill={color}
    />
  </Svg>
);
export default RocketLogo;
