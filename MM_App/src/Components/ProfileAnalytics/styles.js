import { StyleSheet } from 'react-native';

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

export default styles;
