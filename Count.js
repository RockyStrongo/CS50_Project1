import React from 'react'
import {StyleSheet, Text, View, Button, Vibration} from 'react-native'
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
  text: {
    fontSize: 72,
    textAlign : 'center',
  },
  buttonview: {
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 20,
  },
})




class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timefinish: new Date(),
      min : 0,
      sec : 0,
      running: 0,
      timeforbreak: 0,
      timeforwork: 1,
    }
    /*
    this.numtotext = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen"
    ]
    */
  }

  render() {
    return (

      <View>
      <View style={styles.buttonview}>
      <Button  color='white' style={styles.button} title="Start"   onPress={() => {
        this.start();
      }}>
      </Button>
      <Button color='white'   title="Stop" onPress={() => {
        this.stop();
      }}>
      </Button>
      <Button color='white' title="Reset" onPress={() => {
        this.resetme();
      }}>
      </Button>
      </View>
      <View>
      <Text style={styles.text}>
      {this.state.min+' min '+this.state.sec+' sec'}
      </Text>
      </View>
      </View>
    )
  }


  componentDidMount() {
    this.interval = setInterval(this.countdown, 1000)
  }

  stop(){
    this.setState(state => ({running: 0}))
  }

  resetme(){
    this.setState(state => ({running: 0}))
    this.setState(state => ({min: 0}))
    this.setState(state => ({sec: 0}))
  }

  start(){
    if(this.state.timeforwork == 1){
      var d = new Date()
      d.setHours(d.getHours(),d.getMinutes()+25,d.getSeconds(),d.getMilliseconds())
      this.setState(state => ({timefinish: d}))
      this.setState(state => ({running: 1}))
    }
    else if(this.state.timeforbreak == 1){
      var d = new Date()
      d.setHours(d.getHours(),d.getMinutes()+5,d.getSeconds()+5,d.getMilliseconds())
      this.setState(state => ({timefinish: d}))
      this.setState(state => ({running: 1}))
    }

  }

  countdown = () => {
    if(this.state.running == 1){
      var now = new Date().getTime()
      var timetofinish = this.state.timefinish
      var distance = timetofinish - now
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)
      //var minutes = this.numtotext[minutes]
      //var seconds = this.numtotext[seconds]
      this.setState(state => ({min: minutes}))
      this.setState(state => ({sec: seconds}))
    }

    if(this.state.running == 1 && this.state.sec == 0 && this.state.min == 0 && this.state.timeforwork == 1){
      alert('Work period is over, get a break!');
      Vibration.vibrate()
      this.setState(state => ({running: 0}))
      this.setState(state => ({timeforbreak: 1}))
      this.setState(state => ({timeforwork: 0}))
    }
    if(this.state.running == 1 && this.state.sec == 0 && this.state.min == 0 && this.state.timeforbreak == 1){
      alert('Break period is over, start working!');
      Vibration.vibrate()
      this.setState(state => ({running: 0}))
      this.setState(state => ({timeforbreak: 0}))
      this.setState(state => ({timeforwork: 1}))
    }

  }

}


export default Count
