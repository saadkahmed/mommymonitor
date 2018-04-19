import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default function MyTextInput(props) {
  const { input, ...inputProps } = props;
  const { label } = props;
  const { touched, error, warning } = props.meta;
  return (
    <View
        style={{
          flexDirection: 'column',
          height: 50,
          marginTop: 15,
          marginBottom: 15,
          marginLeft: 20 }}
    >
      <Text>{label}</Text>
      <TextInput
        style={{
          borderColor: '#AFAFAF',
          borderWidth: 1,
          borderRadius: 3,
          height: 37,
          width: 300,
          padding: 5,
          marginTop: 7 }}
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
