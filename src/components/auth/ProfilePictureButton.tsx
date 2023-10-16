import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import UploadProfilePictureIcon from '../../assets/svg/UploadProfilePictureIcon';

const ProfilePictureButton: React.FC = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View className="flex-row border-2 border-dashed rounded-xl opacity-50 items-center pl-[34px]">
        <UploadProfilePictureIcon />
        <View className="flex-1 my-[23px] ml-[28px]">
          <Text className="font-syne-bold text-[16px] mb-1">Select a File</Text>
          <Text className="font-syne-regular text-[16px]">
            JPG or PNG file size no more than 10MB
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilePictureButton;

const styles = StyleSheet.create({});
