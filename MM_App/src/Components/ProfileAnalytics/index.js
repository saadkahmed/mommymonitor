import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../common/Button';
import ChartView from 'react-native-highcharts';
import { FetchQuestions } from '../../Actions/ProfileAnalyticsActions';
import styles from './styles';
import { config, options } from './config';

const profilePic = require('../../../pictures/ProfilePic.png');

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
    const conf1 = {
      ...config,
      chart: { ...config.chart, backgroundColor: '#24c4dc' },
      title: { ...config.title, text: 'Sleep' },
      plotOptions: {
        ...config.plotOptions,
        series: { ...config.plotOptions.series, borderColor: '#3ad2ea', color: '#3ad2ea' }
      },
      xAxis: { ...config.xAxis, categories: this.state.dates },
      series: [{ data: this.state.sleep }]
    };

    const conf2 = {
      ...config,
      chart: { ...config.chart, backgroundColor: '#8660e9' },
      title: { ...config.title, text: 'Stress' },
      plotOptions: {
        ...config.plotOptions,
        series: { ...config.plotOptions.series, borderColor: '#9d7bea', color: '#9d7bea' }
      },
      xAxis: { ...config.xAxis, categories: this.state.dates },
      series: [{ data: this.state.stress }]
    };

    const options = {
      chart: {
        title: {
          enabled: false
        }
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
            <Text style={styles.Profileexpectingtextstyle}>Expected Date in 4 months</Text>
          </View>
        </View>

        <View style={styles.Pseudoliststyle}>
          {this.state.dates.length > 0 && (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <ChartView style={styles.Chartstyle} config={conf1} options={options} />
              <ChartView style={styles.Chartstyle} config={conf2} options={options} />
            </View>
          )}
          {this.state.dates.length == 0 && (
            <View>
              <Text> You Have No Stress Data </Text>
            </View>
          )}
          <View style={{ alignSelf: 'center', width: 250, margin: 10 }}>
            <Text>A care package has been created to assist you with these outcomes.</Text>
          </View>
          <View style={{ alignSelf: 'center', height: 45, width: 300 }}>
            <Button>CONTACT NOW</Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { FetchQuestions }
)(ProfileAnalytics);
