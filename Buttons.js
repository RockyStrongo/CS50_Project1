import React from 'react'
import {StyleSheet, Button, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {fontSize: 72},
})

export class Buttons extends React.Component {

  render() {
    return (
	<View>
	<Button title="Start"></Button>
	<Button title="Stop"></Button>
	</View>
    )
  }
}
