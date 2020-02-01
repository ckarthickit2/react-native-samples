import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ThemedText from './themes/ThemedText';
import {ThemeContext, Themes} from './themes/ThemeContext';
import {ButtonGroup} from 'react-native-elements';

const styles = StyleSheet.create({
  containerStye: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonGroupContainerStyle: {
    height: 50,
  },
});

const buttonGroupComponent = ({setThemeName, themeIndexState}) => {
  const themeList = ['light', 'dark', 'salmon'];
  const buttons = themeList.map(element => {
    return <Text>{element}</Text>;
  });
  const [themeIndex, setThemeIndex] = themeIndexState;
  console.log(`state = ${JSON.stringify({themeIndex, setThemeIndex})}`);
  // const {selectedIndex, setSelectedIndex} = state;
  return (
    <ButtonGroup
      onPress={selectedIndex => {
        setThemeName(themeList[selectedIndex]);
        setThemeIndex(selectedIndex);
      }}
      selectedIndex={themeIndex}
      buttons={buttons}
      containerStyle={styles.buttonGroupContainerStyle}
    />
  );
};

const ThemesDemoScreen = () => {
  const [themeName, setThemeName] = useState('light');
  return (
    <ThemeContext.Provider value={Themes[themeName]}>
      <View style={styles.containerStye}>
        {buttonGroupComponent({setThemeName, themeIndexState: useState(0)})}
        <ThemedText label="Press Me" />
      </View>
    </ThemeContext.Provider>
  );
};

export default ThemesDemoScreen;
