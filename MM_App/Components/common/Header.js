//Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

//make components
//components are functions which are always called the same thing as the folder theyre contained in

const Header = (props) => {
//flexbox is a system of positioning elements in a container
//containing element is the viewStyle; child element is the text
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
/*
Styling is done via javascript objects. We make a new object called styles
Styling is applied to any Tag in the component on an individual basis by
including it in a object inside the styles object. We set our properties to the
element in the sub-object. Un-Pack (destructure) your object at the top of your
component function to apply it in the opening tag of your tag.
*/
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: { // there needs to be a space after the colon
    fontSize: 20
  }
};
//Export: I want this component useable to other files
export default Header;
