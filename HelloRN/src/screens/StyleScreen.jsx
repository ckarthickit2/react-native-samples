import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  redText: {
    color: 'red',
  },
  bigBlueText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 34,
  },
});

const StyleScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.redText}>just red</Text>
      <Text style={styles.bigBlueText}>just bigBlue</Text>
      <Text style={[styles.redText, styles.bigBlueText]}>
        red, then bigBlue
      </Text>
      <Text style={[styles.bigBlueText, styles.redText]}>
        bigBlue, then red
      </Text>
    </View>
  );
};

export default StyleScreen;
