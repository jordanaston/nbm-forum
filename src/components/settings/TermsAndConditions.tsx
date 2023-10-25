import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import useGetTermsAndConditionsQuery from '../../hooks/queries/GetTermsAndConditionsQuery';
import StatusMessage from '../core/StatusMessage';

type Props = {
  setShowTerms: (value: boolean) => void;
};

const TermsAndConditions: React.FC<Props> = ({
  setShowTerms,
}: Props): JSX.Element => {
  const {termsData, termsError, termsLoading} = useGetTermsAndConditionsQuery();

  console.log('TERMS DATA: ', JSON.stringify(termsData, null, 3));
  console.log('TERMS LOADING: ', JSON.stringify(termsLoading, null, 3));
  console.log('TERMS ERROR: ', JSON.stringify(termsError, null, 3));

  if (termsLoading && !termsData) {
    return (
      <StatusMessage
        message="Loading Terms And Conditions..."
        textColor="text-ForumPurple"
      />
    );
  }

  if (termsError) {
    return (
      <StatusMessage
        message="Error Loading Terms And Conditions"
        textColor="text-ErrorRed"
      />
    );
  }

  const cleanIndentation = (text: string): string => {
    return text
      .split('\n')
      .map((line: string) => line.trim())
      .join('\n');
  };

  return (
    <ScrollView>
      <View className="mx-6 mb-6 mt-6">
        <TouchableOpacity onPress={() => setShowTerms(false)}>
          <Text className="text-[14px] text-ForumPurple font-syne-medium">
            ← Go Back
          </Text>
        </TouchableOpacity>
        <View>
          <Text className="text-[18px] text-ForumCharcoal mt-6 font-syne-semibold underline">
            NBM Forum Terms And Conditions
          </Text>
          <Text className="text-ForumCharcoal font-syne-regular text-[12px] mt-8">
            {termsData && cleanIndentation(termsData.description)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsAndConditions;
