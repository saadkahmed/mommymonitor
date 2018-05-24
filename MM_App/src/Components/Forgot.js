import React from 'react';
import { connect } from 'react-redux';
import { View, Alert, StyleSheet, ImageBackground } from 'react-native';
import { Button, CardSection, Input } from '../Components/common';
import { emailChangedF, sendForgot } from '../Actions';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

class IForgot extends React.Component {
    componentDidUpdate() {
        if (this.props.message) {
            Alert.alert(this.props.message);
        }
    }

    onEmailChangeF(text) {
      this.props.emailChangedF(text);
    }

    submitForgot() {
    const { emailf } = this.props;
      this.props.sendForgot(emailf);
    }

  render() {
    return (
        <ImageBackground
          source={backgroundpic}
          style={styles.backgroundImage}
        >
          <CardSection>
            <Input
              onChangeText={this.onEmailChangeF.bind(this)}
              value={this.props.emailf}
              label="Email"
              placeholder="JohnSmith@hotmail.com"
            />
          </CardSection>

          <View style={styles.buttonContainer}>
              <Button onPress={this.submitForgot.bind(this)} >
                Submit
              </Button>
          </View>

        </ImageBackground>

    );
  }
}

let styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingTop: 10
    },
    buttonContainer: {
      backgroundColor: 'transparent',
      padding: 5,
      paddingTop: 10,
      flexDirection: 'row',
      position: 'relative',
      width: 150
    },
  }
);

const mapStateToProps = state => {
 return {
   emailf: state.forg.emailf,
   message: state.forg.message
 };
};

export default connect(mapStateToProps, { emailChangedF, sendForgot })(IForgot);
