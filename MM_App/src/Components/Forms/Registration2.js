import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ScrollView, Picker, Platform } from 'react-native';
//jsut didnt want warnings

import Button from '../common/Button';
//import CardSection from '../common/CardSection';
import Forminput from '../common/Forminput';
import Formpicker from '../common/Formpicker';
import FormNumInput from '../common/FormNumInput';
import Formdatepicker from '../common/Formdatepicker';

const OtherFormdatepicker = 'text';
const NewFormDatePicker = Platform.OS === 'ios' ? Formdatepicker : OtherFormdatepicker;
//****************USE THIS FOR ANDROID OR IOS DEV***********************************

const required = value => (value ? undefined : 'required');

export const phonecheck = value => (
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined);

const postalcheck = value => (
  value && !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)
    ? 'Invalid Postal Code'
    : undefined);

const Registration2 = props => {
    const { handleSubmit } = props;
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
        name={'phone_number'}
        label={'Phone Number'}
        validate={[required, phonecheck]}
        component={FormNumInput}
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
        validate={[required]}
        component={Forminput}
      />
  {/* no age checking right now*/}

      <Field
        name={'trimester'}
        label={'Trimester'}
        mode='dropdown'
        component={Formpicker}
      >
      {/*validate={[required]}*/}

        <Picker.Item label="First Trimester" value="1" />
        <Picker.Item label="Second Trimester" value="2" />
        <Picker.Item label="Third Trimester" value="3" />

      </Field>

      <Field
        name={'ethnicity'}
        label={'Ethnicity'}
        mode='dropdown'
        component={Formpicker}
      >
      {/*validate={[required]}*/}

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
        component={Formpicker}
      >
      {/*validate={[required]}*/}

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

      <Field
        name={'marital_status'}
        label={'Marital Status'}
        mode='dropdown'
        component={Formpicker}
      >
      {/*validate={[required]}*/}

        <Picker.Item label="Single" value="1" />
        <Picker.Item label="Married" value="2" />
        <Picker.Item label="Divorced" value="3" />


      </Field>

      <Field
        name={'current_children'}
        label={'Current Number of Children'}
        mode='dropdown'
        component={Formpicker}
      >
      {/*validate={[required]}*/}

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

      <Field
          name={'expecting_date'}
          label={'Expecting Date'}
          value={new Date()}
          component={NewFormDatePicker}
      />

      <Button onPress={handleSubmit}>
        validation and submit
      </Button>

</ScrollView>

  );
};

const Registration = reduxForm({
    form: 'registration'
})(Registration2);

export default Registration;
