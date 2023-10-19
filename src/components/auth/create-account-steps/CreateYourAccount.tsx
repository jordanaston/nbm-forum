import {View} from 'react-native';
import AuthTitleDescription from '../AuthTitleDescription';
import Button from '../../core/Button';
import InputBox from '../../core/Input';
import {useCreateAccountFormik} from '../../../context/CreateAccountFormikContext';
import ErrorAlertBox from '../../core/ErrorAlertBox';

const CreateYourAccount: React.FC = (): JSX.Element => {
  const formik = useCreateAccountFormik();

  return (
    <View>
      <View className="mt-6">
        <AuthTitleDescription
          title="Create your Account"
          description="Enter your details below to start creating your brand new account."
        />
      </View>
      <View>
        <View className="mt-6">
          <InputBox
            placeholder="Enter your first name here"
            inputBoxTitle="Your Name"
            value={formik.values.firstName}
            onChangeText={formik.handleChange('firstName')}
            onBlur={formik.handleBlur('firstName')}
          />
        </View>
        <View className="mt-2">
          <InputBox
            placeholder="Enter your last name here"
            value={formik.values.lastName}
            onChangeText={formik.handleChange('lastName')}
            onBlur={formik.handleBlur('lastName')}
          />
        </View>
        <View className="mt-2">
          <InputBox
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
          <InputBox
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
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorAlertBox text={formik.errors.firstName} />
          ) : formik.touched.lastName && formik.errors.lastName ? (
            <ErrorAlertBox text={formik.errors.lastName} />
          ) : formik.touched.email && formik.errors.email ? (
            <ErrorAlertBox text={formik.errors.email} />
          ) : formik.touched.telephone && formik.errors.telephone ? (
            <ErrorAlertBox text={formik.errors.telephone} />
          ) : formik.status ? (
            <ErrorAlertBox text={formik.status} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default CreateYourAccount;
