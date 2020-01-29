/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Calculator from 'react-native-calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-around',
    alignItems: 'center'
  }
});

const App = () => {
  Calculator.tryPing("Hello", 1, (msg)=> {
    console.log(`msg is ${msg}`);
  });
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  )
}

export default App;