/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';

const textStyle = {
  fontSize: 20,
};
const App: () => React$Node = () => {
  return (
    <View>
      <Text style={textStyle}>Hello RN App</Text>
    </View>
  );
};

export default App;
