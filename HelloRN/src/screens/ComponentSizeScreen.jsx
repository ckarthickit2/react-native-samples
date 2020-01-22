import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  defaulContainerStyle: {
    flex: 1,
  },
  smallCardStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
  },
  mediumCardStyle: {
    width: 75,
    height: 75,
    backgroundColor: 'skyblue',
  },
  largeCardStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
  },
});

const FixedDimensionsComponent = () => {
  return (
    <View>
      {[
        <View style={styles.smallCardStyle} />,
        <View style={styles.mediumCardStyle} />,
        <View style={styles.largeCardStyle} />,
      ]}
    </View>
  );
};

const flexStyles = StyleSheet.create({
  one: {
    flex: 1,
  },
  oneWithColor: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  twoWithColor: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  threeWithColor: {
    flex: 2,
    backgroundColor: 'steelblue',
  },
});

const FlexDimensionsComponent = () => {
  return (
    <View style={flexStyles.one}>
      <View style={flexStyles.oneWithColor} />
      <View style={flexStyles.twoWithColor} />
      <View style={flexStyles.threeWithColor} />
    </View>
  );
};

const ComponentSizeScreen = () => {
  return (
    <View style={styles.defaulContainerStyle}>
      <FixedDimensionsComponent />
      <FlexDimensionsComponent />
    </View>
  );
};

export default ComponentSizeScreen;
