import React from "react";

import { ImageBackground, ScrollView, View, Text, Image, StyleSheet } from "react-native";
import Footer from "../Home/components/Fotter";
const ScreenSuccess = () =>{

    return (
        <ImageBackground style={styles.body} source={require('../../assets/Mask_Group_1.png')}>
            <ScrollView>
                <View styles={styles.container}>
                    <Image style={styles.logo} source={require('../../assets/logo.webp')}></Image>
                    <Text style={styles.title}>TUS DATOS {'\n'} HAN SIDO {''}<Text style={styles.titleRed}>ENVIADOS CON ÉXITO</Text></Text>
                
                    <Text style={styles.subtitle}>En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.</Text>
                    <Text style={styles.subtitle}>Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!</Text>
                
                    <Image style={styles.Image} source={require('../../assets/Group_4039.png')}></Image>
                </View>

                <Footer/>
            </ScrollView>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    Image:{
        width: '95%',
        resizeMode: 'contain',
        marginHorizontal: 10
    },
    title:{
        color: '#fff',
        fontSize: 35,
        marginTop: 35,
        fontWeight: '900',
        textAlign: 'center'
        

    },
    subtitle:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        marginHorizontal: 20,
        marginTop: 25,
        textAlign: 'left'
        
    },  
    titleRed:{
        color: '#ff3a00',
        
    },
    body:{
        flex: 1
    },
    logo: {
        height: 50, 
        width: 150,
        marginTop: 35,
        marginLeft: 135,
        alignContent: 'center', 
    },
    container:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default ScreenSuccess;