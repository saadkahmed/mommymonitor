import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, Text, ScrollView, Picker, Platform, Image } from 'react-native';
import { connect } from 'react-redux';

import Button from '../common/Button';
import Forminput from '../common/Forminput';
import Formpicker from '../common/Formpicker';
import FormNumInput from '../common/FormNumInput';
import Formdatepicker from '../common/Formdatepicker';

const backgroundpic = require('../../../pictures/BackgroundForPages.jpg');

const OtherFormdatepicker = 'text';
const NewFormDatePicker = Platform.OS === 'ios' ? Formdatepicker : OtherFormdatepicker;
//****************USE THIS FOR ANDROID OR IOS DEV***********************************

const required = value => (value ? undefined : 'required');

export const phonecheck = value =>
  (value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined);

const postalcheck = value =>
  (value && !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)
  ?
  'Invalid Postal Code' : undefined);
//

const Registration2 = props => {
  const { handleSubmit } = props;
  return (
    <View style={{ backgroundColor: 'transparent' }}>

      <ScrollView>


        <Field name={'trimester'} label={'TRIMESTER'} mode="dropdown" component={Formpicker}>
          {/*validate={[required]}*/}

          <Picker.Item label="First Trimester" value="1" />
          <Picker.Item label="Second Trimester" value="2" />
          <Picker.Item label="Third Trimester" value="3" />
        </Field>

        <Field
          name={'number_children'}
          label={'NUMBER OF CHILDREN'}
          mode="dropdown"
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
          label={'MARTIAL STATUS'}
          mode="dropdown"
          component={Formpicker}
        >
          {/*validate={[required]}*/}

          <Picker.Item label="Single" value="1" />
          <Picker.Item label="Married" value="2" />
          <Picker.Item label="Divorced" value="3" />
        </Field>



        <Field
          name={'expecting_date'}
          label={'Expecting Date'}
          value={new Date()}
          component={NewFormDatePicker}
        />

        <Button onPress={handleSubmit}>Continue</Button>
      </ScrollView>
    </View>
  );
};

//copied
const styles = {
  titleLabelStyle: {
    padding: 7,
    paddingLeft: 10,
    fontSize: 20,
    color: '#00bbdd',
    fontFamily: 'Futura-CondensedMedium'
  }
};

const Registration = reduxForm({
  form: 'registration'
})(Registration2);

const mapStateToProps = state => {
  return {
    initialValues: state.personalInfo.data
  };
};

export default connect(mapStateToProps)(Registration);
