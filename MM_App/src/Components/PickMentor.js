/* This component is for users to select a mentor.
** The mentors are pulled from the database and fed into this component
** then mentor pictures are recieved and downloaded
** the user then selects a mentor
*/
import React, { Component } from 'react';
import _ from 'lodash';
import firebase from 'firebase';

import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { Button, Spinner } from './common';

// if we want to limit the number of people per maternal mentor we can push
// user ids to the mentor upon selection and only display those with less then x
// number of user ids
// above doesnt need to be done if mentor is picking
// maternl mentor has to approve of the person requesting then a communication line is
// set up

// stack over flow type of thing for mid wives.
// do mentors have to be private

// find a secure email and phone communicaton

// try to make seperate login for matnernal mentors

// have a meeting time for when mentors and users wanna meet
// have maternal mentors log on when and how they meet

class PickMentor extends Component {
    state = {
        NewMentors: [],
        loading: true
    };

  componentWillMount() {
          const { currentUser } = firebase.auth();
          //make sure to check package here!!!!!!!!!!!!!!
              if (currentUser != null) {
                  firebase
                  .database()
                  .ref('/MaternalMentors')
                  .on('value', snapshot => {
                      this.setState({ NewMentors: _.map(snapshot.val(), (val, id) => {
                           let arr = {};
                           arr = val;
                           firebase
                           .storage()
                           .ref(`images/${arr.name}.jpg`)
                           .getDownloadURL()
                           .then(pic => {
                              NewMentors = this.state.NewMentors.map((object) => {
                                 if (object.id === id) {
                                     const newobj = object;
                                     newobj.picurl = pic;
                                     return newobj;
                                 }
                                 return object;
                              });
                              this.setState({ NewMentors });
                             })
                           .catch(err => {
                               console.log(err);
                           });
                           return { ...arr, id };
                       }),
                       loading: false });
                  });
              }
          }
    // console.log('this is the PickMentor screen \n', this.props);
    // Create a reference with an initial file path and name

    AssignMentor = mentor => {
      const { currentUser } = firebase.auth();
        firebase
          .database()
          .ref(`/users/${currentUser.uid}/MaternalMentor/`)
          .set(mentor)
          .then(() => {
            firebase
              .database()
              .ref(`/users/${currentUser.uid}/registration`)
              .set({ complete: true });
             firebase
                .auth()
                .signOut();
                this.props.navigation.navigate('MainScreen');
          })
          .catch(err => {
            console.log(err);
          });
    };

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => (
    <View style={styles.MainContainer}>
      <View style={styles.SubContainer}>
        <View>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'contain', margin: 3 }}
            source={{ uri: item.picurl }}
          />
        </View>

        <View>
          <Text>
            Name: {item.name}
            {'\n'}
            Number Of Children: {item.children}
            {'\n'}
            Languages Spoken: {item.languages}
            {'\n'}
            Ethnicity: {item.ethnicity}
            {'\n'}
            Contact: {item.pref}
          </Text>
        </View>
      </View>

      <View>
        <Button
            onPress={() => this.AssignMentor(item)}
        >
        {item.name}</Button>
      </View>
    </View>
  );
  render() {
      if (this.state.loading === true) {
          console.log('loading');
        return (
            <View>
                <Spinner size="large" />
            </View>
        );
      }
      console.log('this is the array', this.state);
      return (
          <FlatList
              data={this.state.NewMentors}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
          />
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    padding: 5
  },
  SubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  }
});

export default PickMentor;
