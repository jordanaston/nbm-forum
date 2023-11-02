import {View, Text} from 'react-native';
import ErrorIcon from '../../assets/svg/ErrorIcon';

type Props = {
  text: string;
};

const ErrorAlertBox: React.FC<Props> = ({text}: Props): JSX.Element => {
  return (
    <View className="flex-row p-[14px] bg-red-200 rounded-lg">
      <View>
        <ErrorIcon />
      </View>
      <View className="flex justify-center mr-8">
        <Text className="text-ForumCharcoal font-syne-regular text-[14px] ml-2">
          {text}
        </Text>
      </View>
    </View>
  );
};

export default ErrorAlertBox;
