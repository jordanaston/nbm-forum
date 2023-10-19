import {View, Text} from 'react-native';
import RocketLogo from '../../assets/svg/RocketLogo';
import {colors} from '../../constants/Colors';

type Props = {
  text: string;
};

const SuccessAlertBox: React.FC<Props> = ({text}: Props): JSX.Element => {
  return (
    <View className="flex-row p-[14px] bg-ForumLightGray  rounded-lg">
      <View className="opacity-80">
        <RocketLogo width="20" height="20" color={colors.forumCharcoal} />
      </View>
      <View className="flex justify-center mr-8">
        <Text className="text-ForumCharcoal font-syne-regular text-[14px] ml-2">
          {text}
        </Text>
      </View>
    </View>
  );
};

export default SuccessAlertBox;
