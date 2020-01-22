/**
 * @prettier
 */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    width: 193,
    height: 110,
  },
  containerStyle: {
    top: '10%',
    alignItems: 'center',
  },
});

const PicScreen = () => {
  let pic = {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };
  return (
    <View style={styles.containerStyle}>
      {[0, 1, 2, 3].map(() => {
        return <Image source={pic} style={styles.imageStyle} />;
      })}
    </View>
  );
};

export default PicScreen;
