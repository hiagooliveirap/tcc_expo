import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../edit/styles';
import api from '../../services/api';

export default function EditaPerfil({ navigation, route, atCadastro }) {
    const id = route.params.info.id
    const [nome, setNome] = useState(route.params.info.nome);    
    const [email, setEmail] = useState(route.params.info.email);
    const info = {id, nome, email}   
    const at = true;

    console.log(info)

    async function attCadastro() {  
        let alterou = false;
        try {
          let dadosUsu = {
            nome, 
            email
          };
          
          const response = await api.patch('usuarios/' + id, dadosUsu);
          alterou = response.data.confirma; 
        } catch (err) {
            console.log('Erro: ' + err);
        }
    
        if (alterou) {

            navigation.goBack({info});
          
        } else {
            alert('Falha no cadastro');
        }
        
      }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil', {info})}>
                        <Image source={require('../../../assets/arrow-back-black.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>

                <Text style={styles.text_header}>Editar perfil</Text>
            </View>

            <KeyboardAvoidingView style={styles.container_input}>
                <TextInput
                    style={styles.inputBusca}
                    value={nome}
                    onChangeText={(n) => setNome(n) }
                    placeholderTextColor='#C5C5C6'
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    style={styles.inputBusca}
                    value={email}
                    onChangeText={(e) => setEmail(e) }
                    placeholderTextColor='#C5C5C6'
                    underlineColorAndroid='transparent'
                />
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.btn_salvar} onPress={() => attCadastro()}>
                <Text style={styles.text_btn_salvar}>Salvar</Text>
            </TouchableOpacity>

        </View>
    )
}
