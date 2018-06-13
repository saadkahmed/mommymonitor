import React, { Component } from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

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
        // Create a reference with an initial file path and name
        firebase.storage().ref('images/cover.png').getDownloadURL()
        .then((url) => {
            console.log('this is the first url', url);
        });
    }
    
    keyExtractor = (item) => item.id;

    renderItem = ({ item }) => (
          <View style={styles.MainContainer}>
            <View style={styles.SubContainer}>
                  <View>
                    <Image
                          style={{ width: 100, height: 100, resizeMode: 'contain', margin: 3 }}
                          source={{
                              uri: item.pic }}
                    />
                  </View>

                    <View>
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
                          Contact: {item.pref}
                      </Text>

                    </View>

                  </View>

                  <View>
                       <Button onPress={() => this.props.AssignMentor(item)} >
                           {item.name}
                       </Button>
                  </View>
          </View>
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

const styles = StyleSheet.create({
  MainContainer: {
    padding: 5,
  },
  SubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  }
});
//cant scrooll all the way down?
const mapStateToProps = state => {
    const mentors = _.map(state.PickMentor, (val, id) => {
        return { ...val, id };
    });
    return { mentors };
};

export default connect(mapStateToProps, { MentorChange, MentorFetch, AssignMentor })(PickMentor);
