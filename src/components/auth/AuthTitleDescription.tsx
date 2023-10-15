import {View, Text} from 'react-native';

type Props = {
  title: string;
  description: string;
};

const AuthTitleDescription: React.FC<Props> = ({
  title,
  description,
}: Props): JSX.Element => {
  return (
    <View>
      <Text className="font-syne-bold text-ForumCharcoal text-[24px] pt-2">
        {title}
      </Text>
      <Text className="font-syne-regular text-ForumCharcoal text-[16px] mt-[16px]">
        {description}
      </Text>
    </View>
  );
};

export default AuthTitleDescription;
