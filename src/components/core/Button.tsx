import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import {colors} from '../../constants/Colors';

type Props = {
  onPress: () => void;
  text: string;
  arrowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  fontStyle?: string;
  fontSize?: string;
  height?: string;
};

const Button: React.FC<Props> = ({
  onPress,
  text,
  arrowColor = colors.white,
  backgroundColor = 'bg-ForumPurple',
  textColor = 'text-white',
  fontStyle = 'font-syne-regular',
  fontSize = 'text-[16px]',
  height = 'h-[47px]',
}: Props): JSX.Element => {
  return (
    <TouchableOpacity className={`${backgroundColor}`} onPress={onPress}>
      <View
        className={`flex-row items-center justify-center border-2 ${height} border-ForumPurple`}>
        <Text className={`text-center ${textColor} ${fontStyle} ${fontSize}`}>
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
