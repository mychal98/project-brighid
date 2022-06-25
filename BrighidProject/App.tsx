import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.full_container}>
        <StatusBar style="auto"/>
        <View style={styles.welcome_container}>
          <Text style={styles.hello}>
            How are you feeling today?
          </Text>
        </View>
        <View style={styles.actions_container}>
          <Text style={styles.mood_score}>
            8
          </Text>
          <Text style={styles.mood_desc}>
            Pretty Good!
          </Text>
        </View>
        <TouchableHighlight>
          <View style={styles.change_button}>
            <Text style={styles.button_header}>
              Change Mood Score
            </Text>
          </View>
        </TouchableHighlight>
      </View>

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
  welcome_container: {
    flex: 1,
    flexGrow: 2,
    justifyContent: 'space-around',
  },
  hello: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  actions_container: {
    flex: 1,
    flexGrow: 2,
    justifyContent: 'flex-start',
  },
  mood_score: {
    fontSize: 103,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mood_desc: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  change_button: {
    flexGrow: 2,
    alignItems: 'stretch',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 100,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#4FA2D1',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4FA2D1',
  },
  button_header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});