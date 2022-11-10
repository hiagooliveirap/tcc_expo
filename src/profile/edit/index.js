import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../edit/styles';
import api from '../../services/api';

export default function EditaPerfil({ navigation, route }) {
    const id = route.params.item.id
    const [nome, setNome] = useState(route.params.item.nome);    
    const [email, setEmail] = useState(route.params.item.email);   
    const at = true;
    console.log(route.params.item)

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
            navigation.navigate('Tab', at); 
          
        } else {
            alert('Falha no cadastro');
        }
        
      }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Tab', at)}>
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