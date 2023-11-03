import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  iconColor: string;
};

const ProfileIcon: React.FC<Props> = ({iconColor}: Props): JSX.Element => {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        fill={iconColor}
        d="M14 .667C6.64.667.667 6.64.667 14S6.64 27.333 14 27.333 27.333 21.36 27.333 14 21.36.667 14 .667ZM14 6a4.672 4.672 0 0 1 4.667 4.667A4.672 4.672 0 0 1 14 15.333a4.672 4.672 0 0 1-4.667-4.666A4.672 4.672 0 0 1 14 6Zm0 18.667c-2.707 0-5.907-1.094-8.187-3.84A13.262 13.262 0 0 1 14 18c3.093 0 5.933 1.067 8.187 2.827-2.28 2.746-5.48 3.84-8.187 3.84Z"
      />
    </Svg>
  );
};

export default ProfileIcon;
