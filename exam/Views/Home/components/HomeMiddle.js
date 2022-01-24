import React from "react";
import {
    Card,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';


  const HomeMiddle = () => {
    return(
        <View>
            <Text style={styles.titulosecond}>SOMOS EL BRAZO {''}
              <Text>DERECHO </Text>
              <Text style={styles.titulosecondRed}>DE LA TECNOLOGÍA {''}</Text>
            </Text>

            <View style={styles.background}>
              <View style={styles.imageCard}>
                <Image source={require('../../../assets/Group_4036.png')}/>
              </View>
              <View style={styles.hairline}>
                <View style={styles.hairlineLine} />
                <View style={styles.hairlineLineM} />
                <View style={styles.hairlineLine} />

              </View>

              <Text style={styles.titleCard}>IMAGINA</Text>
              
              <View style={styles.styleList}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dotList}>{'\u2022'}</Text>
                  <Text style={styles.textCard}><Text style={styles.boldText}>Estrategia</Text> Digital</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dotList}>{'\u2022'}</Text>
                  <Text style={styles.textCard}>Big Data & <Text style={styles.boldText}>Analysis</Text></Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dotList}>{'\u2022'}</Text>
                  <Text style={styles.textCard}><Text style={styles.boldText}>Consultoría</Text> Tecnológica</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dotList}>{'\u2022'}</Text>
                  <Text style={styles.textCard}><Text style={styles.boldText}>Reducción</Text> de costos TI</Text>
                </View>
              </View>
             

            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    titulosecond:{
      fontSize: 35,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginTop: 35
    },
    titulosecondRed:{
      color: "#ff3a00",
    },
    imageCard:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: "wrap"
    },
    background:{
      backgroundColor: '#ff3a00',
      borderRadius: 10,
      margin: 25,
      padding: 20
    },
    hairline: {
      flexDirection: 'row',
      justifyContent: 'center'
      
    },
    hairlineLine: {
      backgroundColor: '#fff',
      borderRadius: 3,
      height: 3,
      marginHorizontal: 5,
      width: 52
    },
    hairlineLineM: {
      backgroundColor: '#fff',
      height: 3,
      borderRadius: 3,
      marginHorizontal: 2,
      width: 6
    },
    loginButtonBelowText1: {
      fontFamily: 'AvenirNext-Bold',
      fontSize: 14,
      paddingHorizontal: 5,
      alignSelf: 'center',
      color: '#A2A2A2'
    },
    titleCard:{
      color: '#fff',
      fontSize: 30,
      fontWeight:'900',
      marginTop: 10,
      textAlign: "center"
      
    },
    textCard: {
      fontWeight: '300',
      fontSize: 20, 
      marginTop: 15,
      color: '#fff'

    },
    dotList:{
      color: '#fff', 
      textDecorationStyle: 'dotted',
      fontSize: 30,
      fontWeight: '900',
      marginVertical: 8,
      marginHorizontal: 15
    },  
    styleList:{
      padding: 20,
      flexDirection: "column"
    },
    boldText:{
      fontWeight: '500'
    }
  });

  export default HomeMiddle;

