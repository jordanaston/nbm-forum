import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import UploadProfilePictureIcon from '../../assets/svg/UploadProfilePictureIcon';
import {launchImageLibrary, MediaType} from 'react-native-image-picker';

type Props = {
  selectedImage: string | null;
  setSelectedImage: (imageUri: string) => void;
};

const ProfilePictureButton: React.FC<Props> = ({
  selectedImage,
  setSelectedImage,
}: Props): JSX.Element => {
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.assets && response.assets[0].uri) {
        let imageUri = response.assets[0].uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <View>
      {selectedImage ? (
        <View className="mt-2 flex-row">
          <Image
            source={{uri: selectedImage}}
            style={{
              width: 183,
              height: 183,
              borderRadius: 91.5,
              overflow: 'hidden',
            }}
            resizeMode="cover"
          />
          <View className="flex justify-center items-center ml-4">
            <TouchableOpacity onPress={openImagePicker}>
              <Text className="font-syne-medium text-ForumPurple underline">
                Edit Profile Picture
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={openImagePicker}>
          <View className="flex-row border-2 border-dashed rounded-xl opacity-50 items-center pl-[34px]">
            <UploadProfilePictureIcon />
            <View className="flex-1 my-[23px] ml-[28px]">
              <Text className="font-syne-bold text-[16px] mb-1">
                Select a File
              </Text>
              <Text className="font-syne-regular text-[16px]">
                JPG or PNG file size no more than 10MB
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfilePictureButton;
