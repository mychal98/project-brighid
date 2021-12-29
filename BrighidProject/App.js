import React, { Component } from 'react';
import {
  View,
  Text,
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
          <View style={styles.header_container}>
            <Text style={styles.title}>
              CBT Session
            </Text>
            <Text style={styles.instructions}>
              Do your best to keep imagining a situation/scenario about the following trigger/obsession:
            </Text>
          </View>
          <View style={styles.obsession}>
            <Text style={styles.obsession_descr}>
              Discarded something valuable
            </Text>
            <Text style={styles.obsession_rating}>
              5
            </Text>
          </View>
          <View style={styles.timer_container}>
            <Text style={styles.encouragement}>
              You've got this!
            </Text>
            <Text style={styles.timer_text}>
              Time Elapsed:
            </Text>
            <Text style={styles.timer_text}>
              01 hr 35 min
            </Text>
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  full_container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header_container: {
    flex: 1,
    flexGrow: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    color: '#FFFFFF',
  },
  obsession: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  obsession_descr: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#000000',
  },
  obsession_rating: {
    fontSize: 25,
    textAlign: 'left',
    margin: 10,
    color: '#000000',
  },
  timer_container: {
    flex: 1,
    flexGrow: 5,
    alignItems: 'center',
  },
  encouragement: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 50,
    marginBottom: 70,
    color: '#FFFFFF',
  },
  timer_text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 50,
    color: '#FFFFFF',
  },
});