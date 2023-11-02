import {KeyboardAvoidingView, Platform, View} from 'react-native';
import AuthTitleDescription from '../AuthTitleDescription';
import Button from '../../core/Button';
import GooglePlacesInput from '../GooglePlacesInput';
import {useCreateAccountFormik} from '../../../context/CreateAccountFormikContext';

const WhereAreYouLocated: React.FC = (): JSX.Element => {
  const formik = useCreateAccountFormik();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View className="mt-2">
        <AuthTitleDescription
          title="Where are you Located?"
          description="Add your address. Select your address from the suggested address below. "
        />
      </View>
      <View>
        <GooglePlacesInput formik={formik} />
      </View>
      <View className="mt-6">
        <Button
          onPress={formik.handleSubmit}
          text="Next"
          disabled={
            !formik.values.address.number ||
            !!formik.errors.address?.number ||
            !formik.values.address.street ||
            !!formik.errors.address?.street ||
            !formik.values.address.city ||
            !!formik.errors.address?.city ||
            !formik.values.address.state ||
            !!formik.errors.address?.state ||
            !formik.values.address.country ||
            !!formik.errors.address?.country ||
            !formik.values.address.postalCode ||
            !!formik.errors.address?.postalCode
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default WhereAreYouLocated;
