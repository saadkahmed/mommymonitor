import React, { Component } from 'react';
import firebase from 'firebase';
import { FlatList, Text, ScrollView, View, Image, StyleSheet } from 'react-native';
import Button from '../../common/Button';
import * as q from './Questions';

class Questionaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfQs: 6,
      numOfQsToShow: 3,
      s: new Set([])
    };
    while (this.state.s.size < this.state.numOfQsToShow) {
      const temp = Math.floor(Math.random() * this.state.numOfQs);
      if (!this.state.s.has(temp)) this.state.s.add(temp);
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.s.has(0) && <q.Question0 />}
        {this.state.s.has(1) && <q.Question1 />}
        {this.state.s.has(2) && <q.Question2 />}
        {this.state.s.has(3) && <q.Question3 />}
        {this.state.s.has(4) && <q.Question4 />}
        {this.state.s.has(5) && <q.Question5 />}
      </ScrollView>
    );
  }
}

export default Questionaire;
