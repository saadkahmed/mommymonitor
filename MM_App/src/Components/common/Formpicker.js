import React from 'react';
import { Picker, Text, View, StyleSheet } from 'react-native';

export default function renderPicker(props, ...pickerProps) {
  const { onChange, value, ...inputProps } = props.input;
  const { label, children } = props;
  return (
  <View style={styles.container} >
      <View style={styles.labelContainer}>
          <Text style={styles.labelStyle}>{label}</Text>
      </View>
      <View style={styles.pickerStyle}>
          <Picker
            selectedValue={value}
            onValueChange={(newvalue) => onChange(newvalue)}
            {...inputProps}
            {...pickerProps}
          >
            { children }
          </Picker>
      </View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  labelStyle: {
    fontSize: 16,
    color: '#929292'
  },
  pickerStyle: {
    paddingLeft: 30,
    paddingRight: 30,
  }
});
