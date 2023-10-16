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
      <View className="mt-10">
        <AuthTitleDescription
          title="Upload a Profile Picture"
          description="Let’s put a name to a face. Upload a profile picture to complete your profile. This is an optional step."
        />
      </View>
      <Button onPress={onNext} text="Create my Account" />
      <View className="mt-4">
        <Button
          onPress={() => {}}
          text="Skip for now"
          includeArrow={false}
          backgroundColor="bg-none"
          textColor="text-ForumCharcoal"
          textSize="text-[14px]"
          fontStyle="font-syne-medium"
          underline="underline"
          border=""
          height=""
          position=""
        />
      </View>
    </View>
  );
};

export default UploadProfilePicture;
