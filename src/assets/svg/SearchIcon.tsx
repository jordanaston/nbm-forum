import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon: React.FC = (): JSX.Element => {
  return (
    <Svg width={20} height={20} viewBox="0 0 96 96">
      <Path
        fill="#9c9c9c"
        d="M90.829 85.172 68.128 62.471A35.846 35.846 0 0 0 76 40C76 20.118 59.883 4 40 4 20.118 4 4 20.118 4 40s16.118 36 36 36c8.5 0 16.312-2.946 22.471-7.873l22.701 22.701A3.988 3.988 0 0 0 88 92a4 4 0 0 0 2.829-6.828zM40 68c-15.464 0-28-12.536-28-28s12.536-28 28-28c15.465 0 28 12.536 28 28S55.465 68 40 68z"
      />
    </Svg>
  );
};

export default SearchIcon;
