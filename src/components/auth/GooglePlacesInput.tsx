import {Text, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {colors} from '../../constants/Colors';
import Config from 'react-native-config';
import {FormikProps} from 'formik';
import {FormikInitialValues} from '../../context/CreateAccountFormikContext';

type Props = {
  formik: FormikProps<FormikInitialValues>;
};

const GooglePlacesInput: React.FC<Props> = ({formik}: Props): JSX.Element => {
  return (
    <View>
      <View className="mt-8 mb-2">
        <Text className="text-[16px] font-syne-semibold text-ForumCharcoal">
          Enter your Address
        </Text>
      </View>
      <View className="opacity-60">
        <GooglePlacesAutocomplete
          placeholder="Start typing..."
          enablePoweredByContainer={false}
          textInputProps={{
            placeholderTextColor: `${colors.forumCharcoal}`,
            returnKeyType: 'search',
          }}
          onPress={(data: any) => {
            if (data.terms) {
              formik.setFieldValue('address', {
                number: data.terms[0]?.value || '',
                street: data.terms[1]?.value || '',
                city: data.terms[2]?.value || '',
                state: data.terms[3]?.value || '',
                country: data.terms[4]?.value || '',
                postalCode: '0000',
              });
            }
          }}
          onFail={error =>
            console.log(
              'Google Places Autocomplete Error: ',
              JSON.stringify(error, null, 3),
            )
          }
          query={{
            key: Config.GOOGLE_PLACES_API_KEY,
            language: 'en',
          }}
          styles={{
            container: {
              flex: 0,
              width: '100%',
              zIndex: 5,
            },
            listView: {
              height: 220,
              zIndex: 5,
            },
            textInput: {
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: `${colors.forumCharcoal}`,
              fontFamily: 'syne-regular',
              borderRadius: 0,
            },
          }}
        />
      </View>
    </View>
  );
};

export default GooglePlacesInput;
