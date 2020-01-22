import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    //We can even do require import, which will resolve module only upon function call
    //This can be used in lazy-loading.
    Home: require('./src/screens/HomeScreen').default,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
