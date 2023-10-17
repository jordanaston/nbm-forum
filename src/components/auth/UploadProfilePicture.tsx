import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';
import ProfilePictureButton from './ProfilePictureButton';
import {useState} from 'react';
import {useCreateAccountFormik} from '../../context/CreateAccountFormikContext';

const UploadProfilePicture: React.FC = (): JSX.Element => {
  const formik = useCreateAccountFormik();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <View className="">
      <View className="mt-10">
        <AuthTitleDescription
          title="Upload a Profile Picture"
          description="Let’s put a name to a face. Upload a profile picture to complete your profile. This is an optional step."
        />
      </View>
      <View className="mt-8">
        <ProfilePictureButton
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </View>
      <View className="mt-8">
        <Button
          onPress={() => {
            if (selectedImage) {
              formik.setFieldValue('avatar', selectedImage);
              formik.handleSubmit();
            }
          }}
          disabled={!selectedImage}
          text="Create my Account"
        />
      </View>
      <View className="mt-6">
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
