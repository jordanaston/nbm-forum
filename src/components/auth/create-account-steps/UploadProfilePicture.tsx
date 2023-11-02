import {
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import AuthTitleDescription from '../AuthTitleDescription';
import Button from '../../core/Button';
import ProfilePictureButton from '../ProfilePictureButton';
import {useState} from 'react';
import {useCreateAccountFormik} from '../../../context/CreateAccountFormikContext';
import {handleAvatarUpload} from '../../../utils/AvatarUtils';
import ErrorAlertBox from '../../core/ErrorAlertBox';
import {Text} from 'react-native-elements';

type Props = {
  setImageUploading: React.Dispatch<React.SetStateAction<boolean>>;
};

const UploadProfilePicture: React.FC<Props> = ({
  setImageUploading,
}: Props): JSX.Element => {
  const formik = useCreateAccountFormik();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSkipModalVisible, setIsSkipModalVisible] = useState<boolean>(false);

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
    setIsSkipModalVisible(true);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isSkipModalVisible}
        onRequestClose={() => {
          setIsSkipModalVisible(false);
        }}>
        <View
          style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}
          className="flex-1 justify-center items-center pb-6">
          <View className="w-300 p-5 pt-8 pb-8 bg-ForumPurple mx-3">
            <Text className="mb-3 font-syne-bold text-white">
              Skip Profile Picture?
            </Text>
            <Text className="mb-3 font-syne-regular text-white">
              Are you sure you want to create your account without adding a
              profile picture? You can always add one later in Settings.
            </Text>
            <TouchableOpacity
              className="mb-2"
              onPress={() => {
                setSelectedImage(null);
                formik.setFieldValue('avatar', null);
                formik.handleSubmit();
                setIsSkipModalVisible(false);
              }}>
              <Text className="underline font-syne-medium text-white">
                Yes, create my account!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsSkipModalVisible(false);
              }}>
              <Text className="underline font-syne-medium text-white">
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View className="mt-2">
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
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default UploadProfilePicture;
