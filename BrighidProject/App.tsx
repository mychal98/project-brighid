import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.full_container}>
        <StatusBar style="auto"/>
        <View style={styles.welcome_container}>
          <Text style={styles.hello}>
            Hello, Bob
          </Text>
          <Text style={styles.welcome}>
            Welcome back!
          </Text>
        </View>
        <View style = {styles.actions_container}>
          <TouchableHighlight>
            <View style={styles.orange_button}>
              <Text style={styles.button_header}>Daily Dose Of CBT!</Text>
              <Text style={styles.button_desc}>
                Complete your Exposure-Ritual Prevention for the day
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.green_button}>
              <Text style={styles.button_header}>Rate your Mood!</Text>
              <Text style={styles.button_desc}>
                Track trends in your mood over time
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.blue_button}>
              <Text style={styles.button_header}>Rank your Obsessions</Text>
              <Text style={styles.button_desc}>
                Prioritize and order your triggers
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.footer_container}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  full_container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  welcome_container: {
    flex: 1,
    flexGrow: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  actions_container: {
    flex: 1,
    flexGrow: 5,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  footer_container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
    margin: 10,
    color: '#000000',
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
  green_button: {
    flexGrow: 1,
    alignItems: 'stretch',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#70D14F',
    opacity: 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#70D14F',
  },
  blue_button: {
    flexGrow: 1,
    alignItems: 'stretch',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#4FA2D1',
    opacity: 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4FA2D1',
  },
  button_header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FFFFFF',
  },
  button_desc: {
    fontSize: 16,
    textAlign: 'left',
    color: '#FFFFFF',
  },
});