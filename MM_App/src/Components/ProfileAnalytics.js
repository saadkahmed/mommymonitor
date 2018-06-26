import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from './common/Button';
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
    const conf1 = {
      chart: {
        type: 'column',
        backgroundColor: '#24c4dc',
        borderRadius: 4
      },
      title: {
        text: 'Sleep',
        floating: true,
        align: 'left',
        x: 0,
        y: 10,
        style: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20
        }
      },
      plotOptions: {
        series: {
          borderColor: '#3ad2ea',
          color: '#3ad2ea'
        }
      },
      xAxis: {
        type: 'datetime',
        categories: this.state.dates,
        labels: {
          style: {
            color: 'white'
          }
        }
      },
      yAxis: {
        visible: false
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      series: [
        {
          data: this.state.sleep
        }
      ]
    };

    const conf2 = {
      chart: {
        type: 'column',
        backgroundColor: '#8660e9',
        borderRadius: 4
      },
      title: {
        text: 'Stress',
        floating: true,
        align: 'left',
        x: 0,
        y: 10,
        style: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20
        }
      },
      plotOptions: {
        series: {
          borderColor: '#9d7bea',
          color: '#9d7bea'
        }
      },
      xAxis: {
        type: 'datetime',
        categories: this.state.dates,
        labels: {
          style: {
            color: 'white'
          }
        }
      },
      yAxis: {
        visible: false
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      series: [
        {
          data: this.state.stress
        }
      ]
    };

    const options = {
      chart: {
        //backgroundColor: '#8a68e4'
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

const styles = StyleSheet.create({
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
    height: 100
  },
  Profilenametextstyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  Profileexpectingtextstyle: {
    fontSize: 12,
    color: 'white'
  },
  Pseudoliststyle: {
    backgroundColor: '#F5F5F5',
    flex: 1.7,
    height: 100
  },
  Chartstyle: {
    marginTop: 5,
    height: 200
  }
});

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { FetchQuestions }
)(ProfileAnalytics);
