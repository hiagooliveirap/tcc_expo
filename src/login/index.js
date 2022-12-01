import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Animated, ScrollView } from 'react-native';
import styles from './styles';
import api from '../services/api.js'

export default function Login({ navigation }) {
    /* Animação */
    const [offset]  = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0));

    /* Criando controladores de estado */
    const [login, setLogin] = useState('fulano@yahoo.com');
    const [senha, setSenha] = useState('12345');


    /* Função que é responsável por validar o login */
    async function verLogin() {
        let logou = false;
        let nome  = '';
        let id    = '';
        let email = '';
        let info  = {};

        try {
            let dadosUsu = {
                login,
                senha
            };

            const response = await api.post('usuarios/login', dadosUsu);
            logou = response.data.confirma;
            nome  = response.data.nome;
            id    = response.data.Id;
            email = response.data.email;
            info  = {id, nome, email};
            
            
        } catch (err) {
            console.log('Erro: ' + err);
        } finally{
            if (logou) {                
                navigation.navigate('Tab', {info});
            } else {
                alert('Usuário e/ou Senha incorretos');
            }
        }
    }

    /* Componente que renderiza e atualiza a página */
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
        
            <View style={styles.background}>

                <Animated.View style={[
                    styles.container, {
                        opacity: opacity,
                        transform: [
                            { translateY: offset.y }
                        ]
                    }]}>
                            <View style={styles.containerLogo}>
                                <Image source={require('../../assets/Logo.png')} />
                            </View>

                    <TextInput style={styles.input} placeholder='Email'
                        autoCorrect={false}
                        onChangeText={setLogin}
                        value= {login}
                    />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Senha'
                        autoCorrect={false}
                        onChangeText={setSenha}
                        value={senha}
                    />
                    <TouchableOpacity style={styles.btnSubmit}
                        onPress={() => verLogin()}>
                        <Text style={styles.txtSubmit}>Acessar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('CadastroUsuario')}>
                        <Text style={styles.txtRegister}>Criar conta gratuita</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>

    );
}
