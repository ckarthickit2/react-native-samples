/**
 *
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HelloScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Hello RN App</Text>
      <Text style={styles.textStyle}>Another Text compoents</Text>
    </View>
  );
};

export default HelloScreen;
