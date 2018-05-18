import React, { Component } from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { FlatList, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Card, CardItem, } from 'native-base';

import {
    MentorChange,
    MentorFetch,
    AssignMentor,
    } from '../Actions';
import { Button } from './common';
// if we want to limit the number of people per maternal mentor we can push
// user ids to the mentor upon selection and only display those with less then x
// number of user ids
// above doesnt need to be done if mentor is picking
// maternl mentor has to approve of the person requesting then a communication line is
// set up

// stack over flow type of thing for mid wives.
// do mentors have to be private

// remove age, and phone number
// find a secure email and phone communicaton

// try to make seperate login for matnernal mentors

class PickMentor extends Component {
    componentWillMount() {
        this.props.MentorFetch();
        console.log('this is the PickMentor screen \n', this.props);
        console.log(
            //firebase.storage().ref('gs://mommymonitorapp.appspot.com/images/cover.png').getDownloadURL()
        );
    }

    keyExtractor = (item) => item.id;

    renderItem = ({ item }) => (
          <Container>
              <Card>
                  <CardItem>
                      <Image
                          style={{ width: 100, height: 100, resizeMode: 'contain' }}
                          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mommymonitorapp.appspot.com/o/images%2Fcover.png?alt=media&token=b9a8fd70-90ab-43f8-bf56-8000a745d0c1' }}
                      />
                  </CardItem>
                  <CardItem>
                      <Text>
                          Name: {item.name}
                          {'\n'}
                          Age: {item.age}
                          {'\n'}
                          Number Of Children: {item.children}
                          {'\n'}
                          Languages Spoken: {item.languages}
                          {'\n'}
                          Ethnicity: {item.ethnicity}
                          {'\n'}
                          Phone Number: {item.phonenumber}
                          {'\n'}
                          Prefered mode of communication: {item.pref}
                      </Text>
                  </CardItem>
                  <CardItem>
                       <Button onPress={() => this.props.AssignMentor(item)} >
                           {item.name}
                       </Button>
                  </CardItem>
            </Card>
          </Container>
    );
    render() {
        return (
                <FlatList
                    data={this.props.mentors}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
        );
    }
}
//cant scrooll all the way down?
const mapStateToProps = state => {
    const mentors = _.map(state.PickMentor, (val, id) => {
        return { ...val, id };
    });
    return { mentors };
};

export default connect(mapStateToProps, { MentorChange, MentorFetch, AssignMentor })(PickMentor);
