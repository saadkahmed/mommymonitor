/* This component is for users to select a mentor.
** The mentors are pulled from the database and fed into this component
** then mentor pictures are recieved and downloaded
** the user then selects a mentor
*/
import React, { Component } from 'react';
import _ from 'lodash';
import firebase from 'firebase';

import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { MentorChange, MentorFetch, AssignMentor } from '../Actions';
import { Button } from './common';

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
    componentWillMount() {
        this.props.MentorFetch();
        //console.log('this is the PickMentor screen \n', this.props);
        // Create a reference with an initial file path and name

        //need to make a spinner until mentor images are downloaded
    }
    componentWillReceiveProps(props) {
        console.log('these are the props', props);
    }

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
                <Button onPress={() => this.props.AssignMentor(item)}>{item.name}</Button>
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
        padding: 5
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
        //lodash (_) takes the array and makes it an object so here we
        //reassign that array to a variable so that we can manipulate it
        //then each time a new object is read we pull the download url
        //and add it to the object as a key value pair of
        //picurl = the address for the picture
        //have to redefine val i dont know why but it doesnt work otherwise
        let arr = {};
        arr = val;
        firebase
        .storage()
        .ref(`images/${arr.name}.jpg`)
        .getDownloadURL()
        .then(pic => {
            arr.picurl = pic;
        })
        .catch(err => {
        console.log(err);
        });
        return { ...arr, id };
    });
    return { mentors };
};

export default connect(
    mapStateToProps,
    { MentorChange, MentorFetch, AssignMentor }
)(PickMentor);
