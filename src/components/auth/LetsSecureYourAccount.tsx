import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';
import PasswordRules from './PasswordRules';
import TermsAndConditionsCheck from './TermsAndConditionsCheck';
import InputBox from '../core/InputBox';
import {useCreateAccountFormik} from '../../context/CreateAccountFormikContext';

type Props = {
  nextStep: () => void;
};

const LetsSecureYourAccount: React.FC<Props> = ({
  nextStep,
}: Props): JSX.Element => {
  const formik = useCreateAccountFormik();

  return (
    <View className="">
      <View className="mt-10">
        <AuthTitleDescription
          title="Let’s Secure your Account"
          description="Let’s keep your NBM account safe with a secure password."
        />
      </View>

      <View className="mt-8">
        <InputBox
          placeholder="Enter your password"
          inputBoxTitle="Create a Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
      </View>
      <View className="mt-2">
        <InputBox
          placeholder="Re-enter your password"
          inputBoxTitle="Confirm Password"
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
          onPress={() => {
            formik.handleSubmit();
            nextStep();
          }}
          text="Next"
          disabled={
            !formik.values.password ||
            !!formik.errors.password ||
            !formik.values.confirmPassword ||
            !!formik.errors.confirmPassword
          }
        />
      </View>
    </View>
  );
};

export default LetsSecureYourAccount;
