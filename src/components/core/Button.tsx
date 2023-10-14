import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import {colors} from '../../constants/Colors';

type Props = {
  onPress: () => void;
  text: string;
  bgColor?: string;
  borderColor?: string;
  fontStyle?: string;
  fontSize?: string;
  textColor?: string;
  arrowColor?: string;
  height?: string;
};

const Button: React.FC<Props> = ({
  onPress,
  text,
  bgColor = 'ForumPurple',
  borderColor = 'ForumPurple',
  fontStyle = 'syne-regular',
  fontSize = '[16px]',
  textColor = 'white',
  arrowColor = colors.white,
  height = '[50px]',
}: Props): JSX.Element => {
  return (
    <TouchableOpacity className="mt-[8px]" onPress={onPress}>
      <View
        className={`flex-row items-center justify-center border-2 h-${height} bg-${bgColor} border-${borderColor}`}>
        <Text
          className={`text-center text-${textColor} text-${fontSize} font-${fontStyle}`}>
          {text}
        </Text>
        <View className="ml-[9px]">
          <ArrowIcon color={arrowColor} width={'18'} height={'18'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
