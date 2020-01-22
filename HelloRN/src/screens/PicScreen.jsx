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
  //   let items = [0, 1, 2].map(element => {
  //     <Image source={pic} style={styles.imageStyle} />;
  //   });
  return (
    <View style={styles.containerStyle}>
      <Image source={pic} style={styles.imageStyle} />
      <Image source={pic} style={styles.imageStyle} />
      <Image source={pic} style={styles.imageStyle} />
    </View>
  );
};

export default PicScreen;
