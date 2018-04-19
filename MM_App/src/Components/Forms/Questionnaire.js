import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Text, ScrollView } from 'react-native';
import Button from '../common/Button';

import Forminput from '../common/Forminput';

function Questionnaire(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Text>Email</Text>
      <Field
        name={'email'}
        component={Forminput}
        placeholder={'John.Doe@email.com'}
      />
    <Button onPress={props.handleSubmit}>
      Press here
    </Button>
    </ScrollView>
  );
}

export default reduxForm({
  form: 'questionnaire',
})(Questionnaire);
