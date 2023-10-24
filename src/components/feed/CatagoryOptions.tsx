import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useCreatePostFormik} from '../../context/CreatePostFormikContext';
import {Tag} from '../../types/FeedTypes';
import useGetTagDataQuery from '../../hooks/queries/GetTagDataQuery';
import StatusMessage from '../core/StatusMessage';

const CatagoryOptions: React.FC = (): JSX.Element => {
  const formik = useCreatePostFormik();

  const {tagData, tagError, tagLoading} = useGetTagDataQuery();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  if (tagLoading) {
    return (
      <StatusMessage message="Loading Tags..." textColor="text-ForumPurple" />
    );
  }

  if (tagError) {
    return (
      <StatusMessage message="Error Loading Tags" textColor="text-ErrorRed" />
    );
  }

  const addOrRemoveTag = (tagKey: string) => {
    let newTags: string[] = [];

    if (selectedTags.includes(tagKey)) {
      newTags = selectedTags.filter(tag => tag !== tagKey);
    } else if (selectedTags.length < 3) {
      newTags = [...selectedTags, tagKey];
    } else {
      newTags = selectedTags;
    }

    setSelectedTags(newTags);
    formik.setFieldValue('tags', newTags);
  };

  return (
    <View>
      <Text className="text-[25px] font-syne-bold text-ForumCharcoal">
        Select a Category
      </Text>
      <View className="mt-3">
        {tagData?.map((tag: Tag) => (
          <TouchableOpacity
            key={tag.name}
            onPress={() => addOrRemoveTag(tag.name)}
            className="flex-row items-center my-2 ml-1">
            <View
              className={`w-[18px] h-[18px] mr-2.5 border-2 border-ForumCharcoal opacity-70 ${
                selectedTags.includes(tag.name)
                  ? 'bg-ForumCharcoal'
                  : 'bg-transparent opacity-20'
              }`}></View>
            <Text
              className={`text-[18px] font-syne-regular text-ForumCharcoal ${
                selectedTags.includes(tag.name) ? 'opacity-80' : 'opacity-40'
              }`}>
              {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CatagoryOptions;
