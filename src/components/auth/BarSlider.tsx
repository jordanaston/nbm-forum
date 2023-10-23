import React from 'react';
import {View} from 'react-native';

type Props = {
  currentAccountStep: number;
};

const BarSlider: React.FC<Props> = ({
  currentAccountStep,
}: Props): JSX.Element => {
  const getColor = (index: number) => {
    return index <= currentAccountStep + 1
      ? 'bg-ForumPurple'
      : 'bg-ForumCharcoal opacity-20';
  };

  return (
    <View className="mt-[24px] flex justify-center items-center">
      <View className="flex-row items-center">
        <View className={`w-[70px] h-[8px] ${getColor(1)} mr-2`}></View>
        <View className={`w-[70px] h-[8px] ${getColor(2)} mr-2`}></View>
        <View className={`w-[70px] h-[8px] ${getColor(3)} mr-2`}></View>
        <View className={`w-[70px] h-[8px] ${getColor(4)}`}></View>
      </View>
    </View>
  );
};

export default BarSlider;
