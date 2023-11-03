import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import StatusMessage from '../core/StatusMessage';
import useGetTagDataQuery from '../../hooks/queries/GetTagDataQuery';

type Props = {
  selectedTag: string | null;
  setSelectedTag: (name: string | null) => void;
};

const TagFilterCarousel: React.FC<Props> = ({
  selectedTag,
  setSelectedTag,
}: Props): JSX.Element => {
  const {tagData, tagError, tagLoading} = useGetTagDataQuery();

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

  const handleTagPress = (tagName: string) => {
    setSelectedTag(tagName === selectedTag ? null : tagName);
  };

  const determineTagStyles = (
    tagName: string,
    index: number,
    arrayLength: number,
  ) => {
    const bgColor = `bg-${
      selectedTag === tagName ? 'ForumPurple' : 'ForumLightGray'
    }`;
    const marginLeft = index === 0 ? 'ml-0' : 'ml-1.5';
    const marginRight = index === arrayLength - 1 ? 'mr-0' : 'mr-1.5';
    const textColor = `text-${
      selectedTag === tagName ? 'white' : 'ForumCharcoal'
    }`;

    return {
      button: `${bgColor} mt-4 ${marginLeft} ${marginRight} min-w-[80] max-h-[26px]`,
      text: `font-syne-regular font-[14] p-1 text-center ${textColor}`,
    };
  };

  return (
    <View>
      {tagData && (
        <FlatList
          data={tagData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={tag => tag.name}
          renderItem={({item: tag, index}) => {
            const styles = determineTagStyles(tag.name, index, tagData.length);
            return (
              <TouchableOpacity
                onPress={() => handleTagPress(tag.name)}
                className={styles.button}>
                <Text className={styles.text}>{tag.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default TagFilterCarousel;
