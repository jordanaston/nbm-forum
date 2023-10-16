import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';

type Props = {
  onNext: () => void;
};

const WhereAreYouLocated: React.FC<Props> = ({onNext}: Props): JSX.Element => {
  return (
    <View className="">
      <AuthTitleDescription
        title="Where are you Located?"
        description="Add your address. Select your address from the suggested address below. "
      />
      <Button onPress={onNext} text="Next" />
    </View>
  );
};

export default WhereAreYouLocated;
