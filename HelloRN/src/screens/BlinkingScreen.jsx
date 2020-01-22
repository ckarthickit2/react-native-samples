import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32,
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
const BlinkingScreen = props => {
  let [isShowing, setIsShowing] = useState(true);

  //contentDidMount , contentDidUpdate
  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsShowing(!isShowing);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [isShowing]);

  if (isShowing) {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>{props.text || 'NODATA'}</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default BlinkingScreen;
