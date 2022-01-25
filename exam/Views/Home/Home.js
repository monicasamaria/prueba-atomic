import React, {useRef} from "react";

import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable,
  } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import HomeInit from './components/HomeInit';
 import HomeMiddle from './components/HomeMiddle';
 import HomeEnd from './components/HomeEnd';
import Footer from "./components/Fotter";
const Home = ({ navigation }) =>{
    const scrollRef = useRef()

   const handleScrollto = () =>{
     scrollRef.current.scrollTo({
      x:0,
      y:900,
      animated: true
     })
   }
    return(

        <ImageBackground source={require('../../assets/Mask_Group_1.png')}>
        <ScrollView
          ref={scrollRef}
          
        >
          <View style={styles.body}>
            <View style={styles.containerColumn}>

              <Image style={styles.logo} source={require('../../assets/logo.webp')}></Image>
              
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
                <Image source={require('../../assets/Group_4013.png')}></Image>
                </TouchableOpacity>
        
                <Text style={styles.textwant}>Quiero saber más</Text>
                <Image style={styles.imagecenter} source={require('../../assets/Group_4032.png')}></Image>
        
                <Pressable
                
                onPress={()=>{
                  navigation.navigate('Form')
                }}
                style={styles.button}>
                  <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
                </Pressable>
              </View>
            </View>
          <HomeMiddle/>
          <View style={styles.container}>
            <View style={styles.containerColumn}>
              <Text style={styles.titulosecond}>¡TE ENCANTARÁ {'\n'}<Text style={styles.titulosecondRed}>TRABJAR CON {'\n'}NOSOTROS!</Text></Text>
              
              <Image style={styles.imageProceso} source={require('../../assets/Group_4040.png')}></Image>
              <View style={styles.textformatproceso}>
                <Text style={styles.textproceso}>Contratacón {'\n'} remota</Text>
                <Text style={styles.textproceso}>Entrevista con {'\n'}  el área de RH</Text>
                <Text style={styles.textproceso}>Prueba {'\n'} práctica</Text>
                <Text style={styles.textproceso}>Entrevista {'\n'} técnica</Text>

              </View>
              

              <Pressable
              
              onPress={()=>{
                navigation.navigate('Form')
              }}
              style={styles.button}>
                <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
              </Pressable>

              <Text style={styles.titulosecond}>NUESTRO <Text style={styles.titulosecondRed}>EQUIPO</Text></Text>
          
              <View style={styles.card}>
                <View style={styles.containerColumn}>
                  <Image style={styles.imageAvatar} source={require('../../assets/avatar1.jpg')}/>
                    
                    
                    <Text style={styles.textCardRegular}>Ramón Gómez</Text>
                    <Text style={styles.textCard}>Fron-end developer</Text>
                </View>
                  
              </View>
              <View style={styles.card}>
                <View style={styles.containerColumn}>
                  <Image style={styles.imageAvatar} source={require('../../assets/avatar1.jpg')}/>
                    
                    
                    <Text style={styles.textCardRegular}>Ximena Mejía</Text>
                    <Text style={styles.textCard}>UX Designer</Text>
                </View>
                  
              </View>
              <View style={styles.card}>
                <View style={styles.containerColumn}>
                  <Image style={styles.imageAvatar} source={require('../../assets/avatar1.jpg')}/>
                    
                    
                    <Text style={styles.textCardRegular}>Jaime Domínguez</Text>
                    <Text style={styles.textCard}>Back-end developer</Text>
                </View>
                  
              </View>

             

            </View>
            
            
        </View>
        <Footer/>
        </ScrollView>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: null,
      width: null
    },
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
      },
      textformatproceso:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: "wrap"
      },
      textproceso:{
        fontSize: 15,
        textAlign: 'center',
        flexGrow: 1,
        color: '#fff'
      },
      containerColumn:{
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      card:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: '#00629c',
        borderRadius: 15,
        marginTop: 35,
        width: 380,
        height: 250,
        padding: 20
      },
      textCardRegular:{
        fontSize: 18,
        marginTop: 25, 
        color: '#fff',
  
      },
      textCard:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '300'
  
      },
      titulosecond:{
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 35
      },
      titulosecondRed:{
        color: "#ff3a00",
      },
      imageProceso:{
        width: 400, 
        height: 130,
        resizeMode: 'stretch'
      },
      imageAvatar:{
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        overflow: "hidden",
        borderWidth: 3,
      },
      circleAvatar:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'transparent'
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
      },
      footer:{
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        height: 200,
        fontSize: 25,
        marginTop: 85,
        width: '100%'
      },
      textfooter1:{
        fontSize: 15,
        marginTop: 35,
      },
      textfooter2:{
        fontSize: 15,
        marginTop: 35,
        textDecorationLine: 'underline'
      },
      footerImage:{
  
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35,
        color: '#fff'
      }
   })

export default Home;