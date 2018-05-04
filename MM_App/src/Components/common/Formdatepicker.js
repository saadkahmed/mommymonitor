import React from 'react';
import {
  View,
  Text,
  DatePickerIOS
} from 'react-native';

export default function Formdatepicker(props) {
    const { label } = props;
    const { onChange, value } = props.input;
    return (
        <View>
            <Text>
                {label}
            </Text>
            <DatePickerIOS
                date={new Date(value)}
                onDateChange={(newvalue) => onChange(newvalue)}
                mode='date'
            />
    </View>
    );
    }
