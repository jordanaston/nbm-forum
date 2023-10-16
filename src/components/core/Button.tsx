import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import {colors} from '../../constants/Colors';

type Props = {
  onPress: () => void;
  text: string;
  includeArrow?: boolean;
  arrowColor?: string;
  backgroundColor?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  fontStyle?: string;
  textSize?: string;
  height?: string;
  position?: string;
  position2?: string;
  underline?: string;
};

const Button: React.FC<Props> = ({
  onPress,
  text,
  includeArrow = true,
  arrowColor = colors.white,
  backgroundColor = 'bg-ForumPurple',
  border = 'border-2',
  borderColor = 'border-ForumPurple',
  textColor = 'text-white',
  fontStyle = 'font-syne-regular',
  textSize = 'text-[16px]',
  height = 'h-[47px]',
  position = 'flex-row items-center justify-center',
  position2 = 'text-center',
  underline,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity className={`${backgroundColor}`} onPress={onPress}>
      <View className={`${position} ${border} ${height} ${borderColor}`}>
        <Text
          className={`${position2} ${textColor} ${fontStyle} ${textSize} ${underline}`}>
          {text}
        </Text>
        {includeArrow && (
          <View className="ml-[9px]">
            <ArrowIcon color={arrowColor} width={'18'} height={'18'} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
