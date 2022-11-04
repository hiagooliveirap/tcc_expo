import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Animated } from 'react-native';
import styles from './styles';
import api from '../services/api.js'

export default function Login({ navigation }) {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0));

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
  
    async function verLogin() {  
      let logou = false;
      try {
        let dadosUsu = {
          login, 
          senha
        };
        
        const response = await api.post('usuarios/login', dadosUsu);
        logou = response.data.confirma; 
      } catch (err) {
          console.log('Erro: ' + err);
      }
  
      if (logou) {
        navigation.navigate('Tab');
      } else {
        alert('Senha incorreta');
      }
      
    }

    useEffect(() => {


        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 6,
                bounciness: 25,
                useNativeDriver: true,

            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,

            })
        ]).start();
    }, []);


    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/Logo.png')} />
            </View>

            <Animated.View style={[
                styles.container, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }]}>

                <TextInput style={styles.input} placeholder='Email'
                    autoCorrect={false}
                    onChangeText={setLogin}
                />
                <TextInput style={styles.input} secureTextEntry={true} placeholder='Senha'
                    autoCorrect={false}
                    onChangeText={setSenha}                    
                />
                <TouchableOpacity style={styles.btnSubmit}
                    onPress={() => verLogin()}>
                    <Text style={styles.txtSubmit}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('CadastroUsuario')}>
                    <Text style={styles.txtRegister}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}