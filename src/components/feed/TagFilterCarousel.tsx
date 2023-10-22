import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useQuery} from 'react-query';
import {getAllTags} from '../../services/FeedServices';
import {Text} from 'react-native-elements';
import StatusMessage from '../core/StatusMessage';

type Props = {
  selectedTag: string | null;
  setSelectedTag: (name: string | null) => void;
};

const TagFilterCarousel: React.FC<Props> = ({
  selectedTag,
  setSelectedTag,
}: Props): JSX.Element => {
  const {
    data: tagDataArray,
    error: tagsError,
    isLoading: tagsLoading,
  } = useQuery('tags', getAllTags);

  if (tagsLoading) {
    return (
      <StatusMessage message="Loading Tags..." textColor="text-ForumPurple" />
    );
  }

  if (tagsError) {
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
      {tagDataArray && (
        <FlatList
          data={tagDataArray}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={tag => tag.name}
          renderItem={({item: tag, index}) => {
            const styles = determineTagStyles(
              tag.name,
              index,
              tagDataArray.length,
            );
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
