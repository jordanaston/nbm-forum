import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  goToCreateAccountScreen: () => void;
}

const DontHaveAccountCreateOneHere: React.FC<Props> = ({
  goToCreateAccountScreen,
}: Props) => {
  return (
    <>
      <Text className="text-ForumPurple font-syne-regular text-[14px]">
        Don't have an account?
      </Text>
      <TouchableOpacity onPress={goToCreateAccountScreen}>
        <Text className="text-ForumPurple font-syne-medium underline ml-[2px] text-[14px]">
          Create one here.
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default DontHaveAccountCreateOneHere;
