import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Count from './Count.js'

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
		<Count>count</Count>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
