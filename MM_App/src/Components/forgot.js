import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, CardSection, Input } from '../Components/common';
import { emailChangedF, sendForgot } from '../Actions';

class IForgot extends React.Component {
/*
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    submitinfo() {
        firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {
            Alert.alert('Email Sent');
        }).catch(() => { Alert.alert('Invalid Email'); });
    }
*/
    onEmailChangeF(text) {
      this.props.emailChangedF(text);
    }

    submitForgot() {
    const { emailf } = this.props;
      this.props.sendForgot(emailf);
    }

  render() {
    return (
        <View>
        <CardSection>
          <Input
            onChangeText={this.onEmailChangeF.bind(this)}
            value={this.props.emailf}
            label="Email"
            placeholder="JohnSmith@hotmail.com"
          />
        </CardSection>

        <CardSection>
            <Button onPress={this.submitForgot.bind(this)} >
              Register
            </Button>
        </CardSection>

        </View>

    );
  }
}

const mapStateToProps = state => {
 return {
   emailf: state.forg.emailf
 };
};

export default connect(mapStateToProps, { emailChangedF, sendForgot })(IForgot);
