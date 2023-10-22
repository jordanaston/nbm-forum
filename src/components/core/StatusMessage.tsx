import {View} from 'react-native';
import {Text} from 'react-native-elements';

type StatusMessageProps = {
  message: string;
  textColor: string;
};

const StatusMessage: React.FC<StatusMessageProps> = ({message, textColor}) => (
  <View className="justify-center items-center my-4">
    <Text className={`font-syne-regular text-[16px] ${textColor}`}>
      {message}
    </Text>
  </View>
);

export default StatusMessage;
