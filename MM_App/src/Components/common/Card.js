import React from 'react';
import { View } from 'react-native';

/*
This card component is meant to be something reusable because it's a styled box
we're meant to reuse this box over and over.
Whenever some other component is wrapped in another user-made component (Cards in
our case), it passes to it: a props.children property which has its contents
throw the props.children property in the viewtags. now, whenever this component
is encapsulating another component like text, that components will show up
in this component wherever the props.children object appears. then, this
component applies the styling to it and exports it like normal.
*/

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 100,

  }

};

export default Card;
