import React from 'react';
import {View, TextInput} from 'react-native';
import SearchIcon from '../../assets/svg/SearchIcon';
import {colors} from '../../constants/Colors';

const ForumSearchBar: React.FC = (): JSX.Element => {
  return (
    <View className="h-[40px] bg-ForumLightGray flex-row items-center px-2">
      <SearchIcon />
      <TextInput
        placeholder="Search"
        className="text-[16px] ml-2 font-syne-medium opacity-50"
        placeholderTextColor={colors.forumCharcoal}
      />
    </View>
  );
};

export default ForumSearchBar;
