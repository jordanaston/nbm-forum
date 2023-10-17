import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';
import InputBox from '../core/InputBox';
import {useCreateAccountFormik} from '../../context/CreateAccountFormikContext';
import ErrorAlertBox from './ErrorAlertBox';

type Props = {
  nextStep: () => void;
};

const CreateYourAccount: React.FC<Props> = ({nextStep}: Props): JSX.Element => {
  const formik = useCreateAccountFormik();

  return (
    <View>
      <View className="mt-10">
        <AuthTitleDescription
          title="Create your Account"
          description="Enter your details below to start creating your brand new account."
        />
      </View>
      <View>
        <View className="mt-8">
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
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
          />
        </View>
      </View>
      <View className="mt-8">
        <Button
          onPress={() => {
            formik.handleSubmit();
            nextStep();
          }}
          text="Next"
          disabled={
            !formik.values.firstName ||
            !!formik.errors.firstName ||
            !formik.values.lastName ||
            !!formik.errors.lastName ||
            !formik.values.email ||
            !!formik.errors.email
          }
        />
        <View className="mt-7">
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorAlertBox text={formik.errors.firstName} />
          ) : formik.touched.lastName && formik.errors.lastName ? (
            <ErrorAlertBox text={formik.errors.lastName} />
          ) : formik.touched.email && formik.errors.email ? (
            <ErrorAlertBox text={formik.errors.email} />
          ) : formik.status ? (
            <ErrorAlertBox text={formik.status} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default CreateYourAccount;
