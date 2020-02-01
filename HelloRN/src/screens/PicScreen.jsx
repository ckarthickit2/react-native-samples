/**
 * @prettier
 */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    width: 193,
    height: 110,
    resizeMode: 'center',
  },
  containerStyle: {
    top: '2%',
    alignItems: 'center',
  },
});
const placeHolderSource =
  'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
const PicScreen = props => {
  let source = props.navigation.getParam('source', placeHolderSource);
  console.log(`navigationparams = ${source}`);
  return (
    <View style={styles.containerStyle}>
      {[0, 1, 2, 3].map((element, index) => {
        return (
          <Image
            source={{
              uri: props.navigation.getParam('source', placeHolderSource),
            }}
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
