import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import AuthTitleDescription from '../AuthTitleDescription';
import Button from '../../core/Button';
import PasswordRules from '../PasswordRules';
import TermsAndConditionsCheck from '../TermsAndConditionsCheck';
import Input from '../../core/Input';
import {useCreateAccountFormik} from '../../../context/CreateAccountFormikContext';

const LetsSecureYourAccount: React.FC = (): JSX.Element => {
  const formik = useCreateAccountFormik();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View className="mt-2">
          <AuthTitleDescription
            title="Let’s Secure your Account"
            description="Let’s keep your NBM account safe with a secure password."
          />
        </View>

        <View className="mt-8">
          <Input
            placeholder="Enter your password"
            inputBoxTitle="Create a Password"
            isPasswordField={true}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
          />
        </View>
        <View className="mt-2">
          <Input
            placeholder="Re-enter your password"
            inputBoxTitle="Confirm Password"
            isPasswordField={true}
            value={formik.values.confirmPassword}
            onChangeText={formik.handleChange('confirmPassword')}
            onBlur={formik.handleBlur('confirmPassword')}
          />
        </View>

        <View className="mt-5">
          <PasswordRules />
        </View>
        <View className="mt-6">
          <TermsAndConditionsCheck />
        </View>
        <View className="mt-6">
          <Button
            onPress={formik.handleSubmit}
            text="Next"
            disabled={
              !formik.values.password ||
              !!formik.errors.password ||
              !formik.values.confirmPassword ||
              !!formik.errors.confirmPassword
            }
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LetsSecureYourAccount;
