import {Text, View} from 'react-native';
import React from 'react';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {colors} from '../../constants/Colors';
import Config from 'react-native-config';
import {FormikProps} from 'formik';
import {CreateAccountArgs} from '../../types/CreateAccountTypes';

type Props = {
  formik: FormikProps<CreateAccountArgs>;
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
          fetchDetails={true}
          textInputProps={{
            placeholderTextColor: `${colors.forumCharcoal}`,
            returnKeyType: 'search',
          }}
          onPress={(
            data: GooglePlaceData,
            details: GooglePlaceDetail | null = null,
          ) => {
            if (details) {
              const address = details.address_components;
              const streetNumber = address?.find(component =>
                component.types.includes('street_number'),
              )?.long_name;
              const route = address?.find(component =>
                component.types.includes('route'),
              )?.long_name;
              const locality = address?.find(component =>
                component.types.includes('locality'),
              )?.long_name;
              const administrativeArea = address?.find(component =>
                component.types.includes('administrative_area_level_1'),
              )?.short_name;
              const country = address?.find(component =>
                component.types.includes('country'),
              )?.long_name;
              const postalCode = address?.find(component =>
                component.types.includes('postal_code'),
              )?.long_name;

              formik.setFieldValue('address', {
                number: streetNumber || '',
                street: route || '',
                city: locality || '',
                state: administrativeArea || '',
                country: country || '',
                postalCode: postalCode || '',
                fullAddress: details.formatted_address,
                streetName: route || '',
                streetNumber: streetNumber || '',
                googlePlaceId: details.place_id,
                lng: details.geometry.location.lng,
                lat: details.geometry.location.lat,
                suburb: locality || '',
                postcode: postalCode || '',
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
