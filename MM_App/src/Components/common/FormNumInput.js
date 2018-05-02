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
        keyboardType={'phone-pad'}
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
    flex: 5// 2/3 of the space to the input

  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 2// 1/4 of the space for the label
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  }
};
