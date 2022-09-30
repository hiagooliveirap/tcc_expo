import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Animated } from 'react-native';
import styles from './styles';

export default function Login({ navigation }) {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 6,
                bounciness: 25,
                useNativeDriver: true,

            }),
            Animated.timing(opacity,{
                toValue:1,
                duration:500,
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
                    opacity:opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }]}>

                <TextInput style={styles.input} placeholder='Email'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput style={styles.input}secureTextEntry={true} placeholder='Senha'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TouchableOpacity style={styles.btnSubmit}
                    onPress={() => navigation.navigate('Tab')}>
                    <Text style={styles.txtSubmit}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('CadastroUsuario')}>
                    <Text style={styles.txtRegister}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}