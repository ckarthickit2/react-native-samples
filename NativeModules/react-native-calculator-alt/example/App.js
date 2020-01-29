/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import CalculatorAlt from 'react-native-calculator-alt';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-around',
    alignItems: 'center',
  }
});

const App = () => {
   const [pingReponse, setPingResponse] = useState('NONE');
   CalculatorAlt.pingCallback('hello', 1, responseString => {
     setPingResponse(responseString);
   });
   return (
     <View style={styles.container}>
       <Text style={styles.welcome}>Response from Native: {pingReponse}</Text>
     </View>
   );
}
export default App;
