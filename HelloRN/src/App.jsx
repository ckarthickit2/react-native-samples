/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {stackNavigatorRouteConfig, stackNavigatorConfig} from './app.config';

const AppNavigator = createStackNavigator(stackNavigatorRouteConfig);
const AppContainer = createAppContainer(AppNavigator, stackNavigatorConfig);
const App = () => {
  return <AppContainer />;
};

export default App;
