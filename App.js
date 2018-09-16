import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, Button } from 'react-native';

var customData = require('./data-1.json');

//var data = customData.map(function(item) {
 // return {
  //  key: item.name.first_name,
  //  key2: item.name.last_name,
//  };
//});

var firstName = customData.map(item => item.name.first_name);
var lastName = customData.map(item => item.name.last_name);
var homeAddress = customData.map(item => item.home.address);
var homeEmail = customData.map(item => item.home.email);
var homePhone = customData.map(item => item.home.phone_number);
var avatar = customData.map(item => item.avatar);
var workAddress = customData.map(item => item.work.address);
var workEmail = customData.map(item => item.work.email);
var workPhone = customData.map(item => item.work.phone_numnber);
var workCompany = customData.map(item => item.work.company);
var workDepartment = customData.map(item => item.work.department);
var workJob = customData.map(item => item.work.job_title);
//var obj = JSON.parse(customData);
//console.log(obj));
//let parsedData = require(JSON.parse('./data-1.json');
//console.log(parsedData);
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
          source={{uri: avatar[0]}}
        />
        <Text>{firstName[0]} {lastName[0]}</Text>
        <Button title = "Show work info" onPress = {this.addCounter}></Button>
        
        
        <Text>{homeAddress[0]}</Text>
        <Text>{homeEmail[0]}</Text>
        <Text>{homePhone[0]}</Text>
        
        
        
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
        <Text>{firstName[0]} {lastName[0]}</Text>
        <Button title = "Show home info" onPress = {this.addCounter}></Button>
        <Text>{workAddress[0]}</Text>
        <Text>{workEmail[0]}</Text>
        <Text>{workPhone[0]}</Text>
        <Text>{workCompany[0]}</Text>
        <Text>{workDepartment[0] , <Text>{workJob[0]}</Text>}</Text>
        </View>
      )
    }
    
    ;}
      
    
  }
