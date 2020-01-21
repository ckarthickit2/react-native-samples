import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: require('./src/screens/HomeScreen').default, //Lazy Loading using require instead of import
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
