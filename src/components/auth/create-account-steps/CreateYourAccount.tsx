import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import AuthTitleDescription from '../AuthTitleDescription';
import Button from '../../core/Button';
import Input from '../../core/Input';
import {useCreateAccountFormik} from '../../../context/CreateAccountFormikContext';
import ErrorAlertBox from '../../core/ErrorAlertBox';
import {renderErrors} from '../../../utils/RenderErrorsUtil';

const CreateYourAccount: React.FC = (): JSX.Element => {
  const formik = useCreateAccountFormik();

  const errorMessage = renderErrors({
    touched: formik.touched,
    errors: formik.errors,
    status: formik.status,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View className="mt-2">
          <AuthTitleDescription
            title="Create your Account"
            description="Enter your details below to start creating your brand new account."
          />
        </View>
        <View>
          <View className="mt-6">
            <Input
              placeholder="Enter your first name here"
              inputBoxTitle="Your Name"
              value={formik.values.firstName}
              onChangeText={formik.handleChange('firstName')}
              onBlur={formik.handleBlur('firstName')}
            />
          </View>
          <View className="mt-2">
            <Input
              placeholder="Enter your last name here"
              value={formik.values.lastName}
              onChangeText={formik.handleChange('lastName')}
              onBlur={formik.handleBlur('lastName')}
            />
          </View>
          <View className="mt-2">
            <Input
              placeholder="you@email.com"
              inputBoxTitle="Email"
              value={formik.values.email}
              onChangeText={text => {
                formik.handleChange('email')(text);
                formik.setStatus(null);
              }}
              onBlur={formik.handleBlur('email')}
            />
          </View>
          <View className="mt-2">
            <Input
              placeholder="Enter your mobile number here"
              inputBoxTitle="Phone"
              value={formik.values.telephone}
              onChangeText={text => {
                formik.handleChange('telephone')(text);
                formik.setStatus(null);
              }}
              onBlur={formik.handleBlur('telephone')}
            />
          </View>
        </View>
        <View className="mt-6">
          <Button
            onPress={formik.handleSubmit}
            text="Next"
            disabled={
              !formik.values.firstName ||
              !!formik.errors.firstName ||
              !formik.values.lastName ||
              !!formik.errors.lastName ||
              !formik.values.email ||
              !!formik.errors.email ||
              !formik.values.telephone ||
              !!formik.errors.telephone
            }
          />
          <View className="mt-6">
            {errorMessage && <ErrorAlertBox text={errorMessage} />}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateYourAccount;
