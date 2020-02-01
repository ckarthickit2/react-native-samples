import React, {useContext} from 'react';
import {View, Text, Alert} from 'react-native';
import {ThemeContext} from './ThemeContext';

const ThemedText = props => {
  const theme = useContext(ThemeContext);
  console.log(`theme is ${JSON.stringify(theme)}`);
  const padding = 10;
  return (
    <Text
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        padding: padding,
      }}
      onPress={() => Alert.alert('Themed Button Pressed')}>
      {props.label}
    </Text>
  );
};

export default ThemedText;
