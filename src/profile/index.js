import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import user from '../../assets/user1.png'
import api from '../services/api';

export default function Perfil({ navigation, route }) {    
    /* Armazenando o código do usuário logado */
    const id = route.params.info.id;

    /* Criando um controlador de estados */
    const [nome, setNome]  = useState(route.params.info.nome);
    const [email,setEmail] = useState(route.params.info.email);    
    const info = {id, nome, email}

    /* Função responsável por exibir o nome do usuário */
    async function atCadastro() {  
        let alterou = false;
        try {
          
          const response = await api.get('usuarios/' + id);
          alterou = response.data.confirma;
          setNome(response.data.message.usuNome);
          setEmail(response.data.message.usuEmail);
          console.log(response.data.message.usuEmail); 
        } catch (err) {
            console.log('Erro: ' + err);
            return false;
        }
    }           

    /* Componente que renderiza e atualiza a página */
    useEffect(() => {
        const atualiza = navigation.addListener('focus', ()=> {
           atCadastro();
        })
    }, [navigation])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.background02}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/arrow-back-white.png')} />
                    </TouchableOpacity>  

                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFF' }}>Perfil</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('EditPerfil', {info})}>
                        <Image source={require('../../assets/edit-button-white.png')} />
                    </TouchableOpacity>
                </View>
                <Image style={styles.foto} source={user} />
               
                <View style={styles.info}>
                    <Text style={styles.nome_usuario}>{nome}</Text>
                    <Text style={styles.email_usuario}>{email}</Text>
                </View>
            </View>
            
            <TouchableOpacity style={styles.containerFooter} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: '#FF0000', fontSize: 15, fontWeight: 'bold'}}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );        
}