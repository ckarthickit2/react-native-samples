/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, NativeModules} from 'react-native';
import Calculator from 'react-native-calculator';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  let nativeModules = JSON.stringify(NativeModules);
  console.log(`NativeModuels = ${nativeModules}`);
  Calculator.tryPing('Hello', 1, msg => {
    console.log(`msg is ${msg}`);
  });
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>{nativeModules}</Text>
    </View>
  );
};

export default App;
