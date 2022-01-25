import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const Footer = () =>{

    return(
        <View style={styles.footer}>
            <Text style={styles.textfooter1}>2020 AtomicLabs. Todos los derechos reservados.</Text>
            <Text style={styles.textfooter2}>Aviso de privacidad</Text>

            <View style={styles.footerImage}>
                <Image style={{marginHorizontal: 25, width: 30, height: 30}} source={require('../../../assets/linkedin.png')}></Image>
                <Image style={{marginVertical: 5, width: 25, height: 25}} source={require('../../../assets/twitter.png')}></Image>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({ 

    footer:{
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        height: 190,
        fontSize: 25,
        marginTop: 85,
        width: '100%'
      },
      textfooter1:{
        fontSize: 15,
        marginTop: 35,
        marginHorizontal: 10,
        color: '#fff'
      },
      textfooter2:{
        color: '#fff',
        fontSize: 18,
        marginTop: 25,
        textDecorationLine: 'underline'
      },
      footerImage:{

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35,
        color: '#fff'
      },

});
export default Footer;