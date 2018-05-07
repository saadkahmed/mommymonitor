import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default function MyTextInput(props) {
  const { input, ...inputProps } = props;
  const { label } = props;
  const { touched, error, warning } = props.meta;
  return (
    <View style={styles.containerStyle}>

      <Text style={styles.labelStyle}>{label}</Text>

      <View style={styles.inputContainerStyle}>
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

    </View>
  );
}

const styles = {

  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 5,
    marginBottom: 10,
  },

  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    flex: 2 / 3
  },

  labelStyle: {
    fontSize: 16,
    paddingLeft: 5,
    flex: 1 / 3// 1/4 of the space for the label
  },

  inputStyle: {
    color: '#000',
    fontSize: 16,
    lineHeight: 25, //space between each line of text
    flex: 1
  },
};
