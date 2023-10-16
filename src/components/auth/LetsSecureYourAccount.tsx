import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';
import PasswordRules from './PasswordRules';
import TermsAndConditionsCheck from './TermsAndConditionsCheck';

type Props = {
  onNext: () => void;
};

const LetsSecureYourAccount: React.FC<Props> = ({
  onNext,
}: Props): JSX.Element => {
  return (
    <View className="">
      <View className="mt-10">
        <AuthTitleDescription
          title="Let’s Secure your Account"
          description="Let’s keep your NBM account safe with a secure password."
        />
      </View>
      <View>
        <PasswordRules />
      </View>
      <View className='mt-6'>
        <TermsAndConditionsCheck />
      </View>
      <View className="mt-6">
        <Button onPress={onNext} text="Next" />
      </View>
    </View>
  );
};

export default LetsSecureYourAccount;
