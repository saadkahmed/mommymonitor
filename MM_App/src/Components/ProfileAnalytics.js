import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import ChartView from 'react-native-highcharts';
import { FetchQuestions } from '../Actions/ProfileAnalyticsActions';

const profilePic = require('../../pictures/ProfilePic.png');

class ProfileAnalytics extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'YOUR ANALYSIS',
    gesturesEnabled: true,
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  });

  constructor(props) {
    super(props);
    this.state = {
      sleep: [],
      stress: [],
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
    const conf = {
      chart: {
        type: 'column'
        //animation: Highcharts.svg, // don't animate in old IE
        //marginRight: 10,
      },
      title: {
        text: 'Stress & Sleep'
      },
      xAxis: {
        type: 'datetime',
        categories: this.state.dates
      },
      yAxis: {
        title: {
          text: 'Levels'
        }
      },
      exporting: {
        enabled: false
      },
      series: [
        {
          name: 'Stress',
          data: this.state.stress
        },
        {
          name: 'Sleep',
          data: this.state.sleep
        }
      ]
    };

    const options = {
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: ',',
        thousandsSep: '.'
      }
    };

    return (
      <View style={styles.Mainviewstyle}>
        <View style={styles.Profileheaderstyle}>
          <View style={styles.Profilepicviewstyle}>
            <Image source={profilePic} style={styles.Profileimagestyle} />
          </View>

          <View style={styles.Profiletextviewstyle}>
            <Text style={styles.Profilenametextstyle}>Bobby Green</Text>
            <Text style={styles.Profileexpectingtextstyle}>Expecting Date in 4 months</Text>
          </View>
        </View>

        <View style={styles.Pseudoliststyle}>
          {this.state.dates.length > 0 && (
            <View>
              <ChartView style={{ height: 300 }} config={conf} options={options} />
            </View>
          )}
          {this.state.dates.length == 0 && (
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
    backgroundColor: '#a32c80'
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
    fontSize: 18,
    color: 'white'
  },
  Profileexpectingtextstyle: {
    fontSize: 12,
    color: 'white'
  },
  Pseudoliststyle: {
    backgroundColor: '#F5F5F5',
    flex: 1.7,
    height: 100
  }
});

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { FetchQuestions }
)(ProfileAnalytics);
