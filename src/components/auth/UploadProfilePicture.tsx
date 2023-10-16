import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';

type Props = {
  onNext: () => void;
};

const UploadProfilePicture: React.FC<Props> = ({
  onNext,
}: Props): JSX.Element => {
  return (
    <View className="">
      <AuthTitleDescription
        title="Upload a Profile Picture"
        description="Let’s put a name to a face. Upload a profile picture to complete your profile. This is an optional step."
      />
      <Button onPress={onNext} text="Create my Account" />
    </View>
  );
};

export default UploadProfilePicture;
