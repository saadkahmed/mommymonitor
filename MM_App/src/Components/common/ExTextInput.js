import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function ExTextInput(props) {
    const { value, textChange, capital, correct, name, keyboard, holder, textStyle } = props;
return (
<View style={{ flexDirection: 'row' }} >
    <Text>
        {name}
    </Text>
    <TextInput
        style={textStyle}
        value={value}
        onChangeText={textChange}
        autoCapitalize={capital}
        autoCorrect={correct}
        keyboardType={keyboard}
        placeholder={holder}
    />
</View>
);
}
