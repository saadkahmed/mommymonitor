import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import { ScrollView, Picker, Text } from 'react-native';

import Button from '../common/Button';
import Forminput from '../common/Forminput';
import Formpicker from '../common/Formpicker';

const required = value => (value ? undefined : 'required');
export const phonecheck = value => (
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined);
const postalcheck = value => (
  value && !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)
    ? 'Invalid Postal Code'
    : undefined);
const dirtyCheck = () => {
  if (propTypes.dirty) {
    return <Text>dirty</Text>;
  }
};
function Registration2(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      {dirtyCheck}
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
        name={'phone_number'}
        label={'Phone Number'}
        validate={[required, phonecheck]}
        component={Forminput}
      />
      <Field
        name={'postal_code'}
        label={'Postal Code'}
        validate={[required, postalcheck]}
        component={Forminput}
      />
      <Field
        name={'age'}
        label={'Age'}
        validate={[required]} // no age checking right now
        component={Forminput}
      />
      <Field
        name={'trimester'}
        label={'Trimester'}
        mode='dropdown'
        validate={[required]}
        component={Formpicker}
      >
        <Picker.Item label="First Trimester)" value="1" />
        <Picker.Item label="Second Trimester" value="2" />
        <Picker.Item label="Third Trimester" value="3" />

      </Field>

      <Field
        name={'ethnicity'}
        label={'Ethnicity'}
        mode='dropdown'
        validate={[required]}
        component={Formpicker}
      >
        <Picker.Item label="Aboriginal (Inuit, Métis, North American Indian)" value="1" />
        <Picker.Item
          label="Arab/West Asian (e.g., Armenian, Egyptian, Iranian, Lebanese, Moroccan)" value="2"
        />
        <Picker.Item label="Black (e.g., African, Haitian, Jamaican, Somali)" value="3" />
        <Picker.Item label="Chinese" value="4" />
        <Picker.Item label="Filipino" value="5" />
        <Picker.Item label="Japanese" value="6" />
        <Picker.Item label="Korean" value="7" />
        <Picker.Item label="Latin American" value="8" />
        <Picker.Item label="South Asian" value="9" />
        <Picker.Item label="South East Asian" value="10" />
        <Picker.Item label="White (Caucasian)" value="11" />
        <Picker.Item label="Other" value="12" />
      </Field>

      <Field
        name={'number_children'}
        label={'Number of Children'}
        mode='dropdown'
        validate={[required]}
        component={Formpicker}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />


      </Field>

      <Button onPress={props.handleSubmit}>
        validation and submit
      </Button>
    </ScrollView>
  );
}

export default reduxForm({
  form: 'registration2' })(Registration2);
