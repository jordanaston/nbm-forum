import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';
import {Text} from 'react-native-elements';

type Props = {
  onNext: () => void;
};

const CreateYourAccount: React.FC<Props> = ({onNext}: Props): JSX.Element => {
  return (
    <View>
      <AuthTitleDescription
        title="Create your Account"
        description="Enter your details below to start creating your brand new account."
      />
      <Button onPress={onNext} text="Next" />
    </View>
  );
};

export default CreateYourAccount;
