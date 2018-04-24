import React from 'react';
import { Picker, Text, View } from 'react-native';

export default function renderPicker(props, ...pickerProps) {
  const { onChange, value, ...inputProps } = props.input;
  const { label, children } = props;
  return (
  <View>
  <Text>{label}</Text>
  <Picker
    selectedValue={value}
    onValueChange={(value) => onChange(value)}
    {...inputProps}
    {...pickerProps}
  >
    { children }
  </Picker>
</View>
);
}
