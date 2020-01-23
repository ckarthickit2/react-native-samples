export const stackNavigatorRouteConfig = {
  Home: {
    screen: require('./screens/HomeScreen').default,
    path: 'home',
    navigationOptions: {
      title: 'Demos',
      headerTitie: 'Demos',
      headerTitleAlign: 'center',
      headerTitleAllowFontScaling: true,
      //header: <can add custom header-component>,
      headerShown: true,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
  Hello: require('./screens/HelloScreen').default,
  PicScreen: {
    screen: require('./screens/PicScreen').default,
    params: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/a/a3/Negitive.jpg',
    },
  },
  BlinkingScreen: {
    screen: require('./screens/BlinkingScreen').default,
    params: {
      text: 'I am Blinking Screen',
    },
  },
  StyleScreen: require('./screens/StyleScreen').default,
  ComponentSizeScreen: require('./screens/ComponentSizeScreen').default,
};

export const stackNavigatorConfig = {
  initialRouteName: 'Home',
};
// import HelloScreen from './screens/HelloScreen';
// import PicScreen from './screens/PicScreen';
// import BlinkingScreen from './screens/BlinkingScreen';
// import StyleScreen from './screens/StyleScreen';
// import ComponentSizeScreen from './screens/ComponentSizeScreen';
// return <HelloScreen />;

// return (
//   <PicScreen source="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
// );

// return <BlinkingScreen text="I love to Blink" />;

// return <StyleScreen />;
