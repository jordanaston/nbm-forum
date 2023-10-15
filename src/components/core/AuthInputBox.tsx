import {View, Text, TextInput} from 'react-native';
import {colors} from '../../constants/Colors';
import {useState} from 'react';
import PasswordToggle from '../auth/PasswordToggle';

type Props = {
  placeholder: string;
  placeholderTextColor?: string;
  textSize?: string;
  fontStyle?: string;
  inputBoxTitle?: string;
  isPasswordField?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

const AuthInputBox: React.FC<Props> = ({
  placeholder,
  placeholderTextColor = colors.forumCharcoal,
  textSize = 'text-[16px]',
  fontStyle = 'font-syne-regular',
  inputBoxTitle,
  isPasswordField = false,
  value,
  onChangeText,
}: Props): JSX.Element => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <View>
      <Text className="text-[16px] font-syne-bold text-ForumCharcoal mb-2">
        {inputBoxTitle}
      </Text>
      <View className="flex-row justify-between border border-ForumCharcoal opacity-60">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isPasswordField && !passwordVisible}
          value={value} 
          onChangeText={onChangeText} 
          className={`h-[50px] ml-3 ${textSize} ${fontStyle}`}
        />

        <PasswordToggle
          isPasswordField={isPasswordField}
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
      </View>
    </View>
  );
};

export default AuthInputBox;
