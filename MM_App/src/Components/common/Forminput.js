import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default function MyTextInput(props) {
  const { input, ...inputProps } = props;
  const { label } = props;
  const { touched, error, warning } = props.meta;
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {touched &&
        ((error && <Text>{error}</Text>) ||
          (warning && <Text>{warning}</Text>))}
    </View>
  );
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, //space between each line of text
    flex: 3// 2/3 of the space to the input

  },
  labelStyle: {
    fontSize: 14,
    paddingLeft: 20,
    flex: 1// 1/3 of the space for the label
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
};
