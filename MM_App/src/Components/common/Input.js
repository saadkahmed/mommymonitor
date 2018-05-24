import React from 'react';
import { TextInput, View, Text, PixelRatio } from 'react-native';

let FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false} // dont need autocorrect for emails & passwordds
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />

    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: FONT_BACK_LABEL,
    lineHeight: 23, //space between each line of text
    flex: 3// 2/3 of the space to the input

  },
  labelStyle: {
    fontSize: FONT_BACK_LABEL,
    backgroundColor: 'transparent',
    paddingLeft: 20,
    flex: 1// 1/3 of the space for the label
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default Input;
