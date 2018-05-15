import React, { Component } from 'react';
import _ from 'lodash';
import { View, FlatList, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {
    MentorChange,
    MentorFetch,
    AssignMentor,
    } from '../Actions';
import {
    CardSection,
    Card,
    Button,
    } from './common';
// if we want to limit the number of people per maternal mentor we can push
// user ids to the mentor upon selection and only display those with less then x
// number of user ids
class PickMentor extends Component {
    componentWillMount() {
        this.props.MentorFetch();
        console.log('this is the PickMentor screen \n', this.props);
    }

    keyExtractor = (item, index) => item.id;

//theres gotta be a more efficent way of doing this lol
// <Image
//     style={{ width: '100%', height: '40%', resizeMode: 'contain' }}
//     source={{ uri: item.pic }}
// />
//image breaks it for some reason.... might be the percent for hight or resize mode
    renderItem = ({ item }) => (
      <View>
          <Card>
              <CardSection>
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
              </CardSection>
              <CardSection>
                  <Button onPress={() => this.props.AssignMentor(item)} >
                      {item.name}
                  </Button>
              </CardSection>
          </Card>
      </View>
    );
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.mentors}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
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
