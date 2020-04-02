import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomCount from './Count.js'
import {Buttons} from './Buttons.js'; 

//check video at 42 min: https://www.youtube.com/watch?v=Gk6RF5k3C2M&feature=youtu.be

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
       <View><Buttons></Buttons></View>
		<CustomCount count={0} />
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
