import {View, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/Colors';
import ShowPasswordIcon from '../../assets/svg/ShowPasswordIcon';
import HidePasswordIcon from '../../assets/svg/HidePasswordIcon';

type Props = {
  isPasswordField: boolean;
  passwordVisible: boolean;
  setPasswordVisible: (passwordVisible: boolean) => void;
};

const PasswordToggle: React.FC<Props> = ({
  isPasswordField,
  passwordVisible,
  setPasswordVisible,
}: Props): JSX.Element => {
  return (
    <View className="justify-center mr-2">
      {isPasswordField && (
        <View>
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
  );
};

export default PasswordToggle;
