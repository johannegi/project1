import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

let customData = require('./data-1.json');
let avatar = customData.map(item => item.avatar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {counter: 0}
  }
 // let data = this.state.data;
 addCounter = () => {
   this.setState({counter: this.state.counter + 1})
 }
 


  render() {
    if(this.state.counter % 2 == 0)
    {
    return (
     
      
      <View style={styles.container}>
       <Image
          style={{width: 400, height: 250}}
          source={{uri:  avatar[0]}}
        />
        <Text>{customData.map(item => item.name.first_name)} {customData.map(item => item.name.last_name)}</Text>
        <Button title = "Show work info" onPress = {this.addCounter}></Button>
        <Text>{customData.map(item => item.home.address)}</Text>
        <Text>{customData.map(item => item.home.email)}</Text>
        <Text>{customData.map(item => item.home.phone_number)}</Text>
        
        
        
      </View>
    )
    }
    else{
      return(
        <View style={styles.container}>
        <Image
          style={{width: 400, height: 250}}
          source={{uri: avatar[0]}} 
        />
        <Text>{customData.map(item => item.name.first_name)} {customData.map(item => item.name.last_name)}</Text>
        <Button title = "Show home info" onPress = {this.addCounter}></Button>
        <Text>{customData.map(item => item.work.address)}</Text>
        <Text>{customData.map(item => item.work.email)}</Text>
        <Text>{customData.map(item => item.work.phone_numnber)}</Text>
        <Text>{customData.map(item => item.work.company)}</Text>
        <Text>{customData.map(item => item.work.department)} {customData.map(item => item.work.job_title)} </Text>
        </View>
      )
    }
    
    ;}
}
