import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/Colors';
import ShowPasswordIcon from '../../assets/svg/ShowPasswordIcon';
import HidePasswordIcon from '../../assets/svg/HidePasswordIcon';
import {useState} from 'react';

type Props = {
  placeholder: string;
  placeholderTextColor?: string;
  textSize?: string;
  fontStyle?: string;
  inputBoxTitle?: string;
  isPasswordField?: boolean;
};

const AuthInputBox: React.FC<Props> = ({
  placeholder,
  placeholderTextColor = colors.forumCharcoal,
  textSize = 'text-[16px]',
  fontStyle = 'font-syne-regular',
  inputBoxTitle,
  isPasswordField = false,
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
          className={`h-[50px] ml-3 ${textSize} ${fontStyle}`}
        />

        {isPasswordField && (
          <View className="justify-center mr-2">
            {passwordVisible ? (
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <ShowPasswordIcon
                  color={colors.forumCharcoal}
                  width="24"
                  height="24"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <HidePasswordIcon
                  color={colors.forumCharcoal}
                  width="24"
                  height="24"
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default AuthInputBox;
