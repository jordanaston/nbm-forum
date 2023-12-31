import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants/Colors';

const PasswordSecondIcon: React.FC = (): JSX.Element => (
  <Svg width={20} height={16} fill="none">
    <Path
      fill={colors.forumPurple}
      d="m6 12-.825 3.275A.915.915 0 0 1 4.25 16a.947.947 0 0 1-.775-.375.878.878 0 0 1-.175-.825L4 12H1.275a.96.96 0 0 1-.8-.387.947.947 0 0 1-.175-.863.883.883 0 0 1 .35-.55c.183-.133.392-.2.625-.2H4.5l1-4H2.775a.96.96 0 0 1-.8-.388.947.947 0 0 1-.175-.862.883.883 0 0 1 .35-.55c.183-.133.392-.2.625-.2H6L6.825.725A.915.915 0 0 1 7.75 0c.317 0 .575.125.775.375.2.25.258.525.175.825L8 4h4l.825-3.275A.915.915 0 0 1 13.75 0c.317 0 .575.125.775.375.2.25.258.525.175.825L14 4h2.725c.333 0 .6.13.8.388.2.258.258.545.175.862a.883.883 0 0 1-.35.55c-.183.133-.392.2-.625.2H13.5l-1 4h2.725c.333 0 .6.13.8.387.2.259.258.546.175.863a.883.883 0 0 1-.35.55c-.183.133-.392.2-.625.2H12l-.825 3.275a.915.915 0 0 1-.925.725.947.947 0 0 1-.775-.375.878.878 0 0 1-.175-.825L10 12H6Zm.5-2h4l1-4h-4l-1 4Z"
    />
  </Svg>
);
export default PasswordSecondIcon;
