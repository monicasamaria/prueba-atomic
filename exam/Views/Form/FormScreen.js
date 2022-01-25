import React, { useState } from "react";
import * as Progress from 'react-native-progress';
import {TextInput, Pressable, ImageBackground, ScrollView, Text, StyleSheet, Image, View, ProgressBarAndroid } from "react-native";
import ProgressRegister from "./components/ProgressRegister";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from "../Home/components/Fotter";

const FormScreen = ({navigation}) => {
    const [nombre, setNombre] = useState('')
        const [apellido, setApellido] = useState('')
        const [cel, setCel] = useState('')
        const [buttonDisabled, setButtonDisabled] = useState(false)
        const [form, setForm] = useState('register1')
        const handleChangeNombre = (name) => {
    
            this.setNombre(name)
    
            if(nombre.length > 5){
                setButtonDisabled(true)
            }else{
                setButtonDisabled(false)
            }
        }    
    const [titulo1, setTitulo1] = useState('Queremos saber que eres tú, por favor \n ingresa los siguientes datos :')
    const[titulo2, setTitulo2] = useState('Necesitamos validar tu número para \n continuar')
    
    const[titulo3, setTitulo3] = useState('TE QUEREMOS')
    const[titulo4, setTitulo4] = useState('CONOCER')

    const[titulo5, setTitulo5] = useState('VALIDA TU')
    const[titulo6, setTitulo6] = useState('CELULAR')
    
    
    return (

        <ImageBackground style={styles.body} source={require('../../assets/Mask_Group_1.png')}>
            <ScrollView>
                <View styles={styles.container}>
                    <Image style={styles.logo} source={require('../../assets/logo.webp')}></Image>
                    <View style={styles.progress}>
                        <Image source={form =='register1' ? require( '../../assets/Group4015.png') : require( '../../assets/Group_4016.png')}/>
                        <Image source={form =='register1' ? require('../../assets/Group_4019.png') : require('../../assets/Group_4020.png')}/>
                                
                    </View>
                    <Progress.Bar style={{marginHorizontal: 25, marginTop: 15}} progress={ form == 'register1' ? 0.3 : 1} height={20} width={370} color={'#ff3a00'} borderColor={'transparent'} borderRadius={15} backgroundColor={'white'}/>
                    <View style={styles.progressTextBottom}>
                        <Image style={{marginTop: 25}} source={form == 'register1' ? require('../../assets/Group_4014.png') : require('../../assets/Group_4023.png')}/>
                        <Text style={styles.title}>{form == 'register1' ? titulo3 : titulo5}<Text style={styles.titleRed}>{"\n"}{form == 'register1' ? titulo4 : titulo6}</Text></Text>
                                
                    </View>
                    <Text style={styles.textForm1}> {form == 'register1' ? titulo1 : titulo2}</Text>
                    <Text style={styles.textForm1}>{ form != 'register1' ? 'Ingresa tu número a 10 dígitos y te \nenviaremos un código SMS' : '' }</Text>   
                    {form == 'register1' ?  
                        <View style={styles.form}>
                            

                            <Text style={styles.textForm}>Nombre (s)</Text>
                            <TextInput style={nombre.length < 5 && nombre != '' ? styles.textInputE : styles.textInput} 
                                keyboardType='text'                 
                                onChangeText={setNombre}
                                
                            />
                            <Text style={{padding: 0, fontSize: 15, marginBottom: 15 ,color: 'red', fontWeight: '600', fontSihze: 16}}>
                                {nombre.length < 5 && nombre != '' ? 'El nombre deberá tener mínimo 5 caracteres' : ''}
                            </Text>
                            <Text style={styles.textForm}>Apellidos (s)</Text>
                            <TextInput style={apellido.length < 5 && apellido != '' ? styles.textInputE : styles.textInput} 
                                keyboardType='text'                 
                                onChangeText={setApellido}
                            />

                            <Text style={{padding: 0, fontSize: 15, marginBottom: 15 ,color: 'red', fontWeight: '600', fontSihze: 16}}>
                                {apellido.length < 5 && apellido != '' ? 'El apellido deberá tener mínimo 5 caracteres' : ''}
                            </Text>
                            <Pressable 
                                onPress={() => form == 'register1' ? setForm('register2') : setForm('register1')}
                                style={apellido.length >= 5 && nombre.length >= 5 ? styles.button : styles.buttonD}
                                disabled={apellido.length >= 5 && nombre.length >= 5 ? false: true}
                            >
                                <Text  style={styles.buttonText}>Enviar</Text>
                            </Pressable>
                        </View> : 
                        <View style={styles.form}>
                            <Text style={styles.textForm}>Número de Celular</Text>
                            <TextInput style={cel.length < 10 && cel != '' ? styles.textInputE : styles.textInput} 
                                keyboardType='numeric'                 
                                onChangeText={setCel}
                                maxLength={10}
                            />
                            <Text style={{padding: 0, fontSize: 15, marginBottom: 15 ,color: 'red', fontWeight: '600', fontSihze: 16}}>
                            {cel.length < 10 && cel != '' ? 'El número deberá tener mínimo 10 dígitos' : ''}
                            </Text>
                            <Pressable 
                                onPress={() => form == 'register1' ? setForm('register2') : navigation.navigate('Final')}
                                style={cel.length == 10 ? styles.button : styles.buttonD}
                                disabled={cel.length == 10 ? false: true}
                            >
                                <Text  style={styles.buttonText}>Continuar</Text>
                            </Pressable>
                        </View>}
                        <Image style={styles.ImageB} source={require('../../assets/Group_4033.png')}/>
                        
                    
                </View>
                <Footer/>
            </ScrollView>
            
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    body:{
        
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null,
        flexWrap: "wrap",
        fontFamily: 'Arial'
    },
   
    
    
      logo: {
        height: 50, 
        width: 150,
        marginTop: 25,
        marginLeft: 135,
        alignContent: 'center', 
    },
    progress: {
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        marginTop: 25
    },
    progressTextBottom: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    title:{
        color: '#fff',
        fontSize: 35,
        fontWeight: '900',
        marginLeft: 35

    },
    titleRed:{
        color: '#ff3a00',
        
    },
    textForm1:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        marginVertical: 15,
        marginHorizontal: 20
    },
    container:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBar: {
        height: 15,
        width: 400,
        backgroundColor: 'white',
        borderColor: '#000',
        borderRadius: 25,
        borderWidth: 2,
        borderRadius: 5
      },
    progressc: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    textInput:{
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 2,
        width: '100%',
        
    },
    textInputE:{
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'red',
        marginTop: 10,
        marginBottom: 2,
        width: '100%',
    },
    form:{
        padding: 20,
    },  
    textForm:{
        color: '#fff',
        fontSize: 15
    },
    button:{
        backgroundColor: '#ff3a00',
        borderRadius: 35,
        marginHorizontal: 35,
        marginTop: 30,
        marginBottom: 15,
        padding: 20,
        width: '80%'
        
    },
    buttonD: {
        backgroundColor: '#ff9778',
        borderRadius: 35,
        marginHorizontal: 35,
        marginTop: 30,
        marginBottom: 15,
        padding: 20,
        width: '80%'
    },
    buttonText:{
        color:'#fff',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    ImageB:{
        width: '98%',
        resizeMode: 'contain'
    },
});
export default FormScreen;