import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable
  } from 'react-native';

  const HomeEnd = () => {

   
    return(
        <View style={styles.container}>
            <View style={styles.containerColumn}>
              <Text style={styles.titulosecond}>¡TE ENCANTARÁ {'\n'}<Text style={styles.titulosecondRed}>TRABJAR CON {'\n'}NOSOTROS!</Text></Text>
              
              <Image style={styles.imageProceso} source={require('../../../assets/Group_4040.png')}></Image>
              <View style={styles.textformatproceso}>
                <Text style={styles.textproceso}>Contratacón {'\n'} remota</Text>
                <Text style={styles.textproceso}>Entrevista con {'\n'}  el área de RH</Text>
                <Text style={styles.textproceso}>Prueba {'\n'} práctica</Text>
                <Text style={styles.textproceso}>Entrevista {'\n'} técnica</Text>

              </View>
              

              <Pressable
              
              onPress={()=>{
                console.log('boton')
              }}
              style={styles.button}>
                <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
              </Pressable>

              <Text style={styles.titulosecond}>NUESTRO <Text style={styles.titulosecondRed}>EQUIPO</Text></Text>
          
              <View style={styles.card}>
                <View style={styles.containerColumn}>
                  <Image style={styles.imageAvatar} source={require('../../../assets/avatar1.jpg')}/>
                    
                    
                    <Text style={styles.textCardRegular}>Ramón Gómez</Text>
                    <Text style={styles.textCard}>Fron-end developer</Text>
                </View>
                  
              </View>
              <View style={styles.card}>
                <View style={styles.containerColumn}>
                  <Image style={styles.imageAvatar} source={require('../../../assets/avatar1.jpg')}/>
                    
                    
                    <Text style={styles.textCardRegular}>Ximena Mejía</Text>
                    <Text style={styles.textCard}>UX Designer</Text>
                </View>
                  
              </View>
              <View style={styles.card}>
                <View style={styles.containerColumn}>
                  <Image style={styles.imageAvatar} source={require('../../../assets/avatar1.jpg')}/>
                    
                    
                    <Text style={styles.textCardRegular}>Jaime Domínguez</Text>
                    <Text style={styles.textCard}>Back-end developer</Text>
                </View>
                  
              </View>

              <View style={styles.footer}>
                <Text style={styles.textfooter1}>2020 AtomicLabs. Todos los derechos reservados.</Text>
                <Text style={styles.textfooter2}>Aviso de privacidad</Text>

                <View style={styles.footerImage}>
                  <Image style={{marginHorizontal: 25}} source={require('../../../assets/linkedin.png')}></Image>
                  <Image style={{marginVertical: 5}} source={require('../../../assets/twitter.png')}></Image>

                </View>
              </View>

            </View>
            
        </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: "wrap"
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
      flexGrow: 1
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
      width: '55%',
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
      marginTop: 35
    }
});

export default HomeEnd;
