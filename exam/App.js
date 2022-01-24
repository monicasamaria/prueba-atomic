/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useRef} from 'react';
 import {
   SafeAreaView,
   ImageBackground,
   ScrollView,
   Button,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   Image,
   Pressable,
   TouchableOpacityBase,
 } from 'react-native';
 import HomeEnd from './Views/Home/components/HomeEnd';
 
 import HomeInit from './Views/Home/components/HomeInit';
 import HomeMiddle from './Views/Home/components/HomeMiddle';
 
 
 const App = () => {
   const scrollRef = useRef()

   const handleScrollto = () =>{
     scrollRef.current.scrollTo({
      x:0,
      y:900,
      animated: true
     })
   }
   return(
     
       <ImageBackground style={styles.container} source={require('./assets/Mask_Group_1.png')}>
        <ScrollView
          ref={scrollRef}
          
        >
          <HomeInit handleScrollto={handleScrollto}/>
          <HomeMiddle/>
          <HomeEnd/>
        </ScrollView>
        </ImageBackground>
     
     
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
 