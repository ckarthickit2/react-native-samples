/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import Calculator from 'react-native-calculator';
// import InfiniteScroll from 'react-native-infinite-looping-scroll';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  let [pingMsg, setPingMsg] = useState('NODATA');
  let [promisePingMsg, setPromisePingMsg] = useState('NOPROMISE');
  let [eventMsg, setEventMsg] = useState('Awaiting EVENT_MSG...');
  const eventEmitter = new NativeEventEmitter(Calculator);
  console.log('========================');
  let nativeModules = JSON.stringify(NativeModules);
  let calculator = JSON.stringify(Calculator);
  // eslint-disable-next-line no-unused-vars
  for (let [key, value] of Object.entries(Calculator)) {
    console.log(
      `key= ${key}, value= ${
        typeof value === 'function' ? value.constructor : value
      }`,
    );
  }
  console.log('========================');
  Calculator.tryPing('Hello', 1, msg => {
    setPingMsg(`tryPing=${JSON.stringify(msg, null, 2)}`);
  });
  //=========================
  (async function() {
    let result = await Calculator.ping('World', 88);
    setPromisePingMsg(`ping=${JSON.stringify(result, null, 2)}`);
  })(); //IIFE

  eventEmitter.addListener('FruitEvent', event => {
    setEventMsg(JSON.stringify(event, null, 2));
    console.log(event.randomFruit);
  });
  return (
    <View style={styles.container}>
      <Text>NativeModules={nativeModules}</Text>
      <Text>Calculator={calculator}</Text>
      <Text>{pingMsg}</Text>
      <Text>========</Text>
      <Text>{promisePingMsg}</Text>
      <Text>========</Text>
      <Text>{eventMsg}</Text>
    </View>
  );
};

export default App;
