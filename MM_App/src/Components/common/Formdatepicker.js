import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  DatePickerIOS
} from 'react-native';

export default function Formdatepicker(props) {
    const { label } = props;
    const { onChange, value } = props.input;
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <DatePickerIOS
                style={styles.pickerStyle}
                date={new Date(value)}
                onDateChange={(newvalue) => onChange(newvalue)}
                mode='date'
            />
    </View>
    );
    }

    const styles = StyleSheet.create({
      container: {
        padding: 10,
      },
      labelStyle: {
        fontSize: 16,
      },
      pickerStyle: {
        paddingLeft: 30,
        paddingRight: 30,
      }
    });
