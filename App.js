import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// Get the data from the json file
const customData = require('./data-1.json');
// get the avatar from the json file with map
const avatar = customData.map(item => item.avatar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: "center"
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  baseText: {
    fontSize: 20,
  },
  baseText2: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 2.5,
  },
  button2: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 300,
    borderColor: 'black',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  // let data = this.state.data;
  addCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    if (this.state.counter % 2 == 0) {
      return (
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: avatar[0] }} />
            <Text style={styles.baseText}>
              {customData.map(item => item.name.first_name)}{" "}
              {customData.map(item => item.name.last_name)}
            </Text>

            <Button
              style={styles.button2}
              title="Show work info"
              onPress={this.addCounter}
            />
            <Text style={styles.baseText}>
              {customData.map(item => item.home.address)}
            </Text>
            <Text style={styles.baseText2}> </Text>
            <Text style={styles.baseText}>
              {customData.map(item => item.home.email)}
            </Text>
            <Text style={styles.baseText2}> </Text>
            <Text style={styles.baseText}>
              {customData.map(item => item.home.phone_number)}
            </Text>
            <Text style={styles.baseText2}> </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: avatar[0] }} />
            <Text style={styles.baseText}>
              {customData.map(item => item.name.first_name)}{" "}
              {customData.map(item => item.name.last_name)}
            </Text>
            <Button title="Show home info" onPress={this.addCounter} />
            <Text style={styles.baseText}>
              {customData.map(item => item.work.address)}
            </Text>
            <Text style={styles.baseText2}> </Text>
            <Text style={styles.baseText}>
              {customData.map(item => item.work.email)}
            </Text>
            <Text style={styles.baseText2}> </Text>
            <Text style={styles.baseText}>
              {customData.map(item => item.work.phone_number)}
            </Text>
            <Text style={styles.baseText2}> </Text>
            <Text style={styles.baseText}>
              {customData.map(item => item.work.company)}
            </Text>
            <Text style={styles.baseText2}> </Text>
            <Text style={styles.baseText}>
              {customData.map(item => item.work.department)}{" "}
              {customData.map(item => item.work.job_title)}{" "}
            </Text>
            <Text style={styles.baseText2}> </Text>
          </View>
        </View>
      );
    }
  }
}
