import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';

type Props = {
  onNext: () => void;
};

const LetsSecureYourAccount: React.FC<Props> = ({
  onNext,
}: Props): JSX.Element => {
  return (
    <View className="">
      <AuthTitleDescription
        title="Let’s Secure your Account"
        description="Let’s keep your NBM account safe with a secure password."
      />
      <Button onPress={onNext} text="Next" />
    </View>
  );
};

export default LetsSecureYourAccount;
