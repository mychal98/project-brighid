import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Home from './Home';
import MoodTracker from './MoodTracker';

export default class App extends Component {
  render() {
    return (
      <MoodTracker/>

      //<Home />
    );
  }
}

const styles = StyleSheet.create({
  full_container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#70D14F',
    opacity: 0.5,
  },
});