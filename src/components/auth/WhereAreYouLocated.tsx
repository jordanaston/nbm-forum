import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';

type Props = {
  onNext: () => void;
};

const WhereAreYouLocated: React.FC<Props> = ({onNext}: Props): JSX.Element => {
  return (
    <View className="">
      <View className="mt-10">
        <AuthTitleDescription
          title="Where are you Located?"
          description="Add your address. Select your address from the suggested address below. "
        />
      </View>
      <Button onPress={onNext} text="Next" />
    </View>
  );
};

export default WhereAreYouLocated;
