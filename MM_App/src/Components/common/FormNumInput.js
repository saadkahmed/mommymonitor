import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function MyTextInput(props) {
  const { input, ...inputProps } = props;
  const { label } = props;
  const { touched, error, warning } = props.meta;
  return (

    <View style={styles.containerStyle}>

      <View style={styles.inputContainerStyle}>
        <TextInput
          placeholder={label}
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


    </View>
  );
}

const styles = {

  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 2 / 3
  },

  inputStyle: {
    color: '#000',
    fontSize: 18,
    lineHeight: 28, //space between each line of text
    flex: 1
  },
};
