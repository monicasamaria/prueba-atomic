/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useRef} from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import {
   StyleSheet
 } from 'react-native';
import Home from './Views/Home/Home';
import FormScreen from './Views/Form/FormScreen';
import ScreenSuccess from './Views/ScreenSuccess/ScreenSuccess';
 
const Stack = createNativeStackNavigator(

);

 
 const App = () => {
   
   return(
     
       <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}  />
              <Stack.Screen name="Form" component={FormScreen} options={{ headerShown: false}} />
              <Stack.Screen name="Final" component={ScreenSuccess} options={{ headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
       
       </>
     
     
   );
 };
 
 
 const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null
  }
 })
 
 
 
 export default App;
 