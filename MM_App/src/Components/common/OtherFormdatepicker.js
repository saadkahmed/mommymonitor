import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default function Formdatepicker(props) {

async function getdatepicker() {
        try {
          const {action, year, month, day} = await DatePickerAndroid.open({
            // Use `new Date()` for current date.
            // May 25 2020. Month 0 is January.
            date: new Date(value)
          });
          if (action !== DatePickerAndroid.dismissedAction) {
            // Selected year, month (0-11), day
          }
        } catch ({code, message}) {
          console.warn('Cannot open date picker', message);
        }
    }
    const { label } = props;
    const { onChange, value } = props.input;
    return (
        <View>
            <Text>
                {label}
            </Text>
            {this.getdatepicker()}
    </View>
    );
}
