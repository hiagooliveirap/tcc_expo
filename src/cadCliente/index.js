import {
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Animated,
} from 'react-native';

import styles from './styles';
import { useState, useEffect} from 'react';

export default function CadCliente({ navigation }) {

    const [logo] = useState(new Animated.ValueXY({ x: 215, y: 60 }));
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
                <Animated.Image style={{
                    width: logo.x,
                    height: logo.y,}}
                 source={require('../../assets/Logo.png')} />
            </View>

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nome'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput style={styles.input} placeholder='CPF'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput style={styles.input} placeholder='Email'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput style={styles.input} placeholder='Senha'
                    autoCorrect={false} secureTextEntry={true}
                    onChangeText={() => { }}
                />
                <TouchableOpacity style={styles.btnSubmit}
                    onPress={() => navigation.navigate('Tab')}>
                    <Text style={styles.txtSubmit}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
}