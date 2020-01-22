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
    top: '2%',
    alignItems: 'center',
  },
});

const PicScreen = props => {
  return (
    <View style={styles.containerStyle}>
      {[0, 1, 2, 3].map((element, index) => {
        return (
          <Image
            source={{uri: props.source}}
            style={styles.imageStyle}
            key={index}
          />
        );
      })}
      {/** .map returns a new re-mapped Array but it still works !! Interestingly*/}
    </View>
  );
};

export default PicScreen;
