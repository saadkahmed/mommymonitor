import React from 'react';
import { Picker, Text, View } from 'react-native';
import { Card } from 'native-base';

export default function renderPicker(props, ...pickerProps) {
  const { onChange, value, ...inputProps } = props.input;
  const { label, children } = props;
  return (
  <View >
      <Card style={styles.containerStyle}>
          <Text style={styles.textStyle}>{label}</Text>
      </Card>
          <Picker
            selectedValue={value}
            onValueChange={(newvalue) => onChange(newvalue)}
            {...inputProps}
            {...pickerProps}
          >
            { children }
          </Picker>
</View>
);
}

const styles = {
    textStyle: {
        fontSize: 25,
    },

    containerStyle: {
      alignItems: 'center',
    }
};
