import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function ExTextInput(props) {
    const { value, textChange, capital, correct, name, keyboard, holder } = props;
return (
<View style={{ flexDirection: 'row' }} >
    <Text style={{ flex: 0.3 }}>
        {name}
    </Text>
    <TextInput
        style={{ flex: 0.7 }}
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
