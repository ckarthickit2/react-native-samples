import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {stackNavigatorRouteConfig} from '../app.config';
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flatListStyle: {
    flex: 1,
    backgroundColor: 'magenta',
  },
  flatListItemStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    height: 100,
    padding: 20,
    margin: 2,
  },
  textItemStyle: {
    flex: 1,
    fontSize: 26,
    color: 'darkblue',
  },
});
const HomeScreen = props => {
  const data = Object.keys(stackNavigatorRouteConfig).map(item => {
    return {id: item, title: item};
  });
  return (
    <View style={styles.containerStyle}>
      <FlatList
        style={styles.flatListStyle}
        data={data}
        renderItem={({item}) => {
          const _onPress = () => {
            console.log(`clicked item is ${JSON.stringify(item)}`);
            props.navigation.navigate(item.id);
          };
          return (
            <View style={styles.flatListItemStyle}>
              <Text style={styles.textItemStyle} onPress={_onPress}>
                {item.title}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
