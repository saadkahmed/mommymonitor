import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      borderRadius: 25,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative',
  },
});

export default CardSection;
