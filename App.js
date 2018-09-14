import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let customData = require('./data-1.json');
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
  render() {
    return (
      
      <View style={styles.container}>
        <Text>Hello Swag World</Text>
        
        <Text>{JSON.stringify(customData)} </Text>
      </View>
    );
  }
}

