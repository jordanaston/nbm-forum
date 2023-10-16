import {View} from 'react-native';
import AuthTitleDescription from './AuthTitleDescription';
import Button from '../core/Button';
import {Text} from 'react-native-elements';
import InputBox from '../core/InputBox';
import {createPasswordValidationSchema} from '../../validation/PasswordValidationSchema';
import {useFormik} from 'formik';
import {nameValidationSchema} from '../../validation/NameValidationSchema';
import {emailValidationSchema} from '../../validation/EmailValidationSchema';
import {createAccountFormik} from '../../functions/CreateAccountFormik';
import {useCreateAccountFormik} from '../../context/CreateAccountFormikContext';

type Props = {
  onNext: () => void;
};

const CreateYourAccount: React.FC<Props> = ({onNext}: Props): JSX.Element => {
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
            onNext();
          }}
          text="Next"
        />
      </View>
    </View>
  );
};

export default CreateYourAccount;
