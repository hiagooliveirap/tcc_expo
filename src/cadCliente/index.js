import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native';

import styles from './styles';
import { useState, useEffect} from 'react';
import api from '../services/api.js';

export default function CadCliente({ navigation }) {

    /* Animação da tela de login */    
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

    /* Função que tem a responsabilidade de cadastrar um usuário no banco de dados */
    async function verCadastro() {  
        let logou = false;
        try {
          let dadosUsu = {
            nome, 
            senha,
            email,
            documento
          };
          
          const response = await api.post('usuarios/', dadosUsu);
          logou = response.data.confirma; 
        } catch (err) {
            console.log('Erro: ' + err);
        }
    
        if (logou) {
          navigation.navigate('Login');
        } else {
          alert('Falha no cadastro');
        }
        
    }
 
    /* Criando os controladores de estado */
    const [nome, setNome]           = useState(''); 
    const [senha, setSenha]         = useState(''); 
    const [email, setEmail]         = useState(''); 
    const [documento, setDocumento] = useState(''); 


    return (
        <View style={styles.background}>
            
                {/* <View style={styles.containerLogo}>
                    <Animated.Image style={{
                        width: logo.x,
                        height: logo.y,}}
                    source={require('../../assets/Logo.png')} />
                </View> */}
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nome'
                    autoCorrect={false}
                    onChangeText={(nm) => setNome(nm)}
                />
                <TextInput style={styles.input} placeholder='CPF'
                    autoCorrect={false}
                    onChangeText={(cpf) => setDocumento(cpf)}
                />
                <TextInput style={styles.input} placeholder='Email'
                    autoCorrect={false}
                    onChangeText={(em) => setEmail(em)}
                />
                <TextInput style={styles.input} placeholder='Senha'
                    autoCorrect={false} secureTextEntry={true}
                    onChangeText={(sn) => setSenha(sn)}
                />
                <TouchableOpacity style={styles.btnSubmit}
                    onPress={() => verCadastro()}>
                    <Text style={styles.txtSubmit}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
