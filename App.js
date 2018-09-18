import React from 'react';
import {
  StyleSheet, Text, View, Image, Button,
} from 'react-native';

// Get the data from the json file
const customData = require('./data-1.json');
// get the avatar from the json file with map
const avatar = customData.map(item => item.avatar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  baseText: {
    fontSize: 20,
  },
  underline: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 2.5,
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 300,
    borderColor: 'black',
  },
});
// We used this website for inspiration for our animation:
// https://facebook.github.io/react-native/docs/animations
/* class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing( // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 4000, // Make it take a while
      },
    ).start(); // Starts the animation
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: true,
    };
  }

  switchViewHome = () => {
    this.setState({ counter: true });
  };

  switchViewWork = () => {
    this.setState({ counter: false });
  };

  render() {
    if (this.state.counter === true) {
      return (
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: avatar[0] }} />
            <Text style={styles.baseText}>
              {customData.map(item => item.name.first_name)}
              {customData.map(item => item.name.last_name)}
            </Text>
            <Button
              title="Show work info"
              onPress={this.switchViewWork}
            />
            <Text style={styles.baseText}>
              {customData.map(item => item.home.address)}
            </Text>
            <Text style={styles.underline} />
            <Text style={styles.baseText}>
              {customData.map(item => item.home.email)}
            </Text>
            <Text style={styles.underline} />
            <Text style={styles.baseText}>
              {customData.map(item => item.home.phone_number)}
            </Text>
            <Text style={styles.underline} />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>

          <Image style={styles.image} source={{ uri: avatar[0] }} />
          <Text style={styles.baseText}>

            {customData.map(item => item.name.first_name)}
            {customData.map(item => item.name.last_name)}
          </Text>
          <Button title="Show home info" onPress={this.switchViewHome} />
          <Text style={styles.baseText}>
            {customData.map(item => item.work.address)}
          </Text>
          <Text style={styles.underline} />
          <Text style={styles.baseText}>
            {customData.map(item => item.work.email)}
          </Text>
          <Text style={styles.underline} />
          <Text style={styles.baseText}>
            {customData.map(item => item.work.phone_number)}
          </Text>
          <Text style={styles.underline} />
          <Text style={styles.baseText}>
            {customData.map(item => item.work.company)}
          </Text>
          <Text style={styles.underline} />
          <Text style={styles.baseText}>
            {customData.map(item => item.work.department)}
            {customData.map(item => item.work.job_title)}
          </Text>
          <Text style={styles.underline} />
        </View>
      </View>
    );
  }
}
