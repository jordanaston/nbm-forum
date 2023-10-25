import React from 'react';
import {View} from 'react-native';
import {CreateAccountSteps} from '../../types/CreateAccountTypes';

type Props = {
  currentAccountStep: CreateAccountSteps;
};

const BarSlider: React.FC<Props> = ({
  currentAccountStep,
}: Props): JSX.Element => {
  const getNumericStep = (step: CreateAccountSteps): number => {
    switch (step) {
      case 'CreateYourAccount':
        return 1;
      case 'WhereAreYouLocated':
        return 2;
      case 'LetsSecureYourAccount':
        return 3;
      case 'UploadProfilePicture':
        return 4;
      default:
        return 1;
    }
  };

  const getColor = (index: number) => {
    const numericStep = getNumericStep(currentAccountStep);
    return index <= numericStep
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
