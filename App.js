import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const getData = async () => {
  const val1 = await new Promise(resolve => setTimeout(() => resolve(), 0));
  const val2 = await new Promise(resolve => setTimeout(() => resolve(), 1));
  return { val1, val2 };
};

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    getData().then(() => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Loading....</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native mate!</Text>
      </View>
    );
  }
}

export default App;
