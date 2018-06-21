import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { FetchQuestions } from '../Actions/ProfileAnalyticsActions';

const profilePic = require('../../pictures/ProfilePic.png');

class ProfileAnalytics extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    gesturesEnabled: true,
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  });

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dates: []
    };
  }

  componentDidMount() {
    this.props.FetchQuestions();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.ProfileAnalytics);
  }

  render() {
    const fill = 'rgb(134, 65, 244)';

    return (
      <View style={styles.Mainviewstyle}>
        <View style={styles.Profileheaderstyle}>
          <View style={styles.Profilepicviewstyle}>
            <Image source={profilePic} style={styles.Profileimagestyle} />
          </View>

          <View style={styles.Profiletextviewstyle}>
            <Text style={styles.Profilenametextstyle}>Username: Bobby Green</Text>
            <Text style={styles.Profileexpectingtextstyle}>Expecting Date: 4 months</Text>
          </View>
        </View>

        <View style={styles.Pseudoliststyle}>
          {this.state.data.length > 0 && (
            <View>
              <BarChart
                data={this.state.data}
                svg={{ fill: 'black' }}
                contentInset={{ top: 30, bottom: 30 }}
              >
                <Grid />
              </BarChart>
            </View>
          )}
          {this.state.data.length == 0 && (
            <View>
              <Text> You Have No Stress Data </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  Mainviewstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FFEFF9'
  },
  Profileheaderstyle: {
    flex: 0.3,
    flexDirection: 'row',
    height: 100
  },
  Profilepicviewstyle: {
    flex: 0.5
  },
  Profileimagestyle: {
    width: 60,
    height: 60,
    margin: 15,
    borderRadius: 30
  },
  Profiletextviewstyle: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
    height: 100
  },
  Profilenametextstyle: {
    fontSize: 18
  },
  Profileexpectingtextstyle: {
    fontSize: 12
  },
  Pseudoliststyle: { height: 200, padding: 20 }
});

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { FetchQuestions }
)(ProfileAnalytics);
