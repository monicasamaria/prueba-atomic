import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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




  const HomeInit = ({
    handleScrollto, navigation
  }) => {
    return(
        <View style={styles.body}>
            <View style={styles.containerColumn}>

              <Image style={styles.logo} source={require('../../../assets/logo.webp')}></Image>
              
              <Text style={styles.titulo}>Desarrolla todo {''}
                <Text style={styles.titleRed}>tu POTENCIAL {''}</Text>
                <Text style={styles.titlesec}>dentro del equipo {''}</Text>
                <Text style={styles.titleRed}>ATOMIC</Text>
                <Text style={styles.title}>LABS</Text>
              </Text>
      
              <TouchableOpacity
                onPress={() =>{

                  handleScrollto()
                }
                  


                }>
                <Image source={require('../../../assets/Group_4013.png')}></Image>
              </TouchableOpacity>
      
              <Text style={styles.textwant}>Quiero saber más</Text>
              <Image style={styles.imagecenter} source={require('../../../assets/Group_4032.png')}></Image>
      
              <Pressable
              
              onPress={()=>{
                navigation.navigate('Form')
              }}
              style={styles.button}>
                <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
              </Pressable>
            </View>
            
    
    
            
        </View>
    );
  }

  const styles = StyleSheet.create({
    
    titulo: {
      fontSize: 55,
      marginTop: 25,
      marginBottom: 25,
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: '700'
    },
    title:{
      fontWeight: '900', 
    },
    titlesec: {
      fontSize: 45
    },
    titleRed:{
      color: "#ff3a00",
      fontWeight: '900'
    },
    textwant: {
      marginTop: 10,
      marginBottom: 25,
      fontSize: 18,
      fontWeight: '500',
      color: '#fff'
    },
    body: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: "wrap"
    },
    containerColumn:{
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    centerText: {
      alignItems: 'center'
    },
    image: {
      width:'100%',
      height:'100%',
      backgroundColor:'rgba(0,0,0,0)',
      
    },
    imagecenter: {
      width: 400,
      height: 300,
      resizeMode: 'contain'
    },
    logo: {
      height: 50, 
      width: 100,
      marginTop: 25,
      alignContent: 'center', 
    },
    scroll:{
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 15,
      marginTop: 25,
      padding: 20,
      width: 170,
  
      
    },
    buttonText:{
      color: '#1590b9',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })

  export default HomeInit;