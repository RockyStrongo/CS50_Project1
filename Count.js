import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {fontSize: 72},
})


class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count : 1500000,
	  running: 'Y',
    }
  }

  render() {
    return (
	
	<View>
	<Button title="Start"   /*onPress={() => {
    this.start();
  }}*/>
  </Button>
	<Button title="Stop" onPress={() => {
    this.stop();
  }}></Button>	
  	<Button title="Reset" onPress={() => {
    this.resetme();
  }}></Button>	
      <Text style={styles.text}>
		  {this.state.count}
      </Text>
	  </View>
    )
  }


  componentDidMount() {
	  if(this.state.running === 'Y' ){
		  this.interval = setInterval(this.incrementCount, 1000)
	  } else {
			alert ('what')
	  }
  }
  
componentDidUpdate(prevProps, prevState) {
  if (prevState.running !== this.state.running) {
alert ('please stop the counter')  
}

	if(this.state.count === 25){
			alert('you should have a break now')
	}
}
  
   // incrementCount = () => {
	//	this.setState(prevState => ({count:new Date().toLocaleString()}))  }
  
  incrementCount = () => {
		//var now = new Date().getTime()
		//var d = new Date()
		//d.setHours(d.getHours(),d.getMinutes()+25,d.getSeconds(),d.getMilliseconds())
		//var distance = d - now
		//var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		//var seconds = Math.floor((distance % (1000 * 60)) / 1000)
		//this.setState(prevState => ({min: minutes}))
		//this.setState(prevState => ({sec: seconds}))
		this.setState(prevState => ({count:prevState-1}))		
	  }

  stop = () => {
	this.setState(prevState => ({count: 0}))
    this.setState(state => ({running: 'N'}))
  }
  
    resetme = () => {
	this.setState(prevState => ({count: 0}))
  }
  
    componentWillUnmount() {
    clearInterval(this.interval)
  }
  
}


export default Count
