import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

const styles = StyleSheet.create({
  full_container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
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