import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ScrollView } from 'react-native';

import Button from '../common/Button';
import Forminput from '../common/Forminput';

const required = value => (value ? undefined : 'required');
const postalcheck = value => (
  value && !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)
    ? 'Invalid email address'
    : undefined);

function Registration2(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Field
        name={'first_name'}
        label={'First Name'}
        validate={[required]}
        component={Forminput}
      />
      <Field
        name={'last_name'}
        label={'Last Name'}
        validate={[required]}
        component={Forminput}
      />
      <Field
        name={'postal_code'}
        label={'Postal Code'}
        validate={[required, postalcheck]}
        component={Forminput}
      />
      <Button onPress={props.handleSubmit}>
        Press here
      </Button>
    </ScrollView>
  );
}

export default reduxForm({
  form: 'registration2' })(Registration2);

/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
