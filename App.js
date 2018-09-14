import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var customData = require('./data-1.json');

//var data = customData.map(function(item) {
 // return {
  //  key: item.name.first_name,
  //  key2: item.name.last_name,
//  };
//});

var data = customData.map(item => item.name.first_name);

console.log(data[0]);
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
  constructor(){
    super();
    this.state = {data: []}
  }
  let data = this.state.data;
  render() {
    return (
      
      <View style={styles.container}>
        <Text>Hello Swag World</Text>
        <Text>{data[0]}</Text>
        
      </View>
    );
  }
}
//<Text>{JSON.stringify(data)}</Text>
//<Text>{JSON.stringify(customData)} </Text>