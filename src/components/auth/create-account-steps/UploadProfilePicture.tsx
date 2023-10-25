import {Alert, View} from 'react-native';
import AuthTitleDescription from '../AuthTitleDescription';
import Button from '../../core/Button';
import ProfilePictureButton from '../ProfilePictureButton';
import {useEffect, useState} from 'react';
import {useCreateAccountFormik} from '../../../context/CreateAccountFormikContext';
import {handleAvatarUpload} from '../../../utils/AvatarUtils';
import ErrorAlertBox from '../../core/ErrorAlertBox';

type Props = {
  setImageUploading: React.Dispatch<React.SetStateAction<boolean>>;
};

const UploadProfilePicture: React.FC<Props> = ({
  setImageUploading,
}: Props): JSX.Element => {
  const formik = useCreateAccountFormik();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSetAvatar = async () => {
    if (!selectedImage) return;
    setImageUploading(true);
    const uploadResponse = await handleAvatarUpload(selectedImage);
    if (uploadResponse && uploadResponse.fileName) {
      formik.setFieldValue('avatar', uploadResponse.fileName);
    }
    setImageUploading(false);
    formik.handleSubmit();
  };

  const handleSkipForNow = () => {
    Alert.alert(
      'Skip Profile Picture',
      'Are you sure you want to create your account without adding a profile picture? You can always add one later in Settings.',
      [
        {
          text: 'Back',

          style: 'cancel',
        },
        {
          text: 'Yes, create my account!',
          onPress: () => {
            setSelectedImage(null);
            formik.setFieldValue('avatar', null);
            formik.handleSubmit();
          },
        },
      ],
    );
  };

  return (
    <View>
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
          onPress={handleSetAvatar}
          disabled={!selectedImage}
          text="Create my Account"
        />
      </View>

      {formik.status && (
        <View className="mt-8">
          <ErrorAlertBox text={formik.status} />
        </View>
      )}

      <View className="mt-6">
        <Button
          onPress={handleSkipForNow}
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
