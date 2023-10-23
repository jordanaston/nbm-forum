import {View, Text, TextInput} from 'react-native';
import {colors} from '../../constants/Colors';
import {useState} from 'react';
import PasswordToggle from '../auth/PasswordToggle';

type Props = {
  placeholder: string;
  placeholderTextColor?: string;
  textSize?: string;
  textColor?: string;
  fontStyle?: string;
  border?: string;
  borderColor?: string;
  backgroundColor?: string;
  opacity?: string;
  inputBoxTitle?: string;
  isPasswordField?: boolean;
  height?: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  onSubmitEditing?: () => void;
};

const Input: React.FC<Props> = ({
  placeholder,
  placeholderTextColor = colors.forumCharcoal,
  textSize = 'text-[16px]',
  textColor = 'text-ForumCharcoal',
  fontStyle = 'font-syne-regular',
  border = 'border',
  borderColor = 'border-ForumCharcoal',
  backgroundColor = 'bg-none',
  opacity = 'opacity-60',
  inputBoxTitle,
  isPasswordField = false,
  height = 'h-[50px]',
  value,
  onChangeText,
  onBlur,
  onSubmitEditing,
}: Props): JSX.Element => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <View>
      {inputBoxTitle && (
        <Text className={`text-[16px] font-syne-bold ${textColor} mb-2`}>
          {inputBoxTitle}
        </Text>
      )}
      <View
        className={`flex-row justify-between ${backgroundColor} ${border} ${borderColor} ${opacity}`}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isPasswordField && !passwordVisible}
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          className={`${height} ml-3 ${textSize} ${fontStyle}`}
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

export default Input;
