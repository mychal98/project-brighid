import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Home from './Home';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#FCA625', '#FFDF58']}
        style={styles.full_container}
        start={{x: 1.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        locations={[0.7,1]}>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  full_container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  hello: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    color: '#000000',
  },
  orange_button: {
    flexGrow: 1,
    alignItems: 'stretch',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#FCA625',
    opacity: 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FCA625',
  },
});