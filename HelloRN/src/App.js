/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import HelloScreen from './screens/HelloScreen';
import PicScreen from './screens/PicScreen';
const App = () => {
  // return <HelloScreen />;
  return (
    <PicScreen source="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
  );
};

export default App;
