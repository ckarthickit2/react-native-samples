import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MaterialKeyboardArrowRight} from '@assets/images';

let styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'powderblue',
  },
});

const SvgDemoScreen = () => {
  console.log(`MaterialKeyboardArrowRight = ${MaterialKeyboardArrowRight}`);
  return (
    <View style={styles.containerStyle}>
      <MaterialKeyboardArrowRight width={120} height={40} />
    </View>
  );
};

export default SvgDemoScreen;
