import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';

type Props = {
  nextStep: () => void;
};

const WhereAreYouLocated: React.FC<Props> = ({
  nextStep,
}: Props): JSX.Element => {
  return (
    <View className="">
      <View className="mt-10">
        <AuthTitleDescription
          title="Where are you Located?"
          description="Add your address. Select your address from the suggested address below. "
        />
      </View>
      <Button onPress={nextStep} text="Next" />
    </View>
  );
};

export default WhereAreYouLocated;
