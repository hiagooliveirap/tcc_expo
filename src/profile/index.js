import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import styles from './styles';
import CardItemHorizontal from '../produtos/card_item_horizontal';
import img1 from '../../assets/product-7.jpg';

import api from '../services/api';

export default function Perfil({ navigation, route }) {
    const [exibe, setExibe] = useState(0);
    const id = route.params.info.id;
    const [nome, setNome] = useState(route.params.info.nome);
    const [email,setEmail] = useState(route.params.info.email);
    const [tipoSel, setTipoSel] = useState([]);
    const info = {id, nome, email}
    console.log(info)
    


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
        } finally{
            useEffect(() => {
                const atualiza = navigation.addListener('focus', ()=> {
                    atCadastro();
                })
              }, [navigation])
        }
        
            if (!alterou) {
                alert('Falha na atualização');
            }
        
      }


    return (
        <View style={styles.container}>
            <View style={styles.background02}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/arrow-back-white.png')} />
                    </TouchableOpacity>  

                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFF' }}>Perfil</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('EditPerfil', {info, atCadastro: atCadastro})}>
                        <Image source={require('../../assets/edit-button-white.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.foto}>
                </View>

                {/* <Image source={require('../../assets/profile.jpg')} style={styles.foto} /> */}

                <View style={styles.info}>
                    <Text style={styles.nome_usuario}>{nome}</Text>
                    <Text style={styles.email_usuario}>{email}</Text>
                </View>
            </View>
            
            <TouchableOpacity style={styles.containerFooter}>
                <Text style={{ color: '#FF0000', fontSize: 15, fontWeight: 'bold'}}>Sair</Text>
            </TouchableOpacity>
        </View>
    );    
    // const [nome, setNome] = useState(route.params.name);
    // const [email,setEmail] = useState(route.params.email);

    // const mudaTela = (tela) =>{
    //     setExibe(tela)
    // }

    //  async function atCadastro() {  
    //     let alterou = false;
    //     try {
          
    //       const response = await api.get('usuarios/' + id);
    //       alterou = response.data.confirma;
    //       setNome(response.data.message.usuNome);
    //       setEmail(response.data.message.usuEmail);
    //       console.log(email); 
    //     } catch (err) {
    //         console.log('Erro: ' + err);
    //         return false;
    //     } 
        
    //         if (!alterou) {
    //             alert('Falha na atualização');
    //         }
        
    //   }


    //     useEffect(() => {
    //     atCadastro();
    // }, [exibe]);

    
    // return(
    //     <View style={styles.container}>
    //         {
    //             exibe === 0
    //             ?
    //                 <VerPerfil mudaTela={mudaTela} route={route} navigation={navigation} />    
    //             :
    //                 <MudarPerfil mudaTela={mudaTela} route={route} navigation={navigation} />
    //         }

            
    //     </View>
    // )


}


// function VerPerfil({mudaTela, route, navigation}){
    
// }

// function MudarPerfil({route, mudaTela}){
//     const id = route.params.usuId;
//     const [nome, setNome] = useState(route.params.name);    
//     const [email, setEmail] = useState(route.params.email);   

//     async function attCadastro() {  
//         let alterou = false;
//         try {
//           let dadosUsu = {
//             nome, 
//             email
//           };
//           const response = await api.patch('usuarios/' + id, dadosUsu);
//           alterou = response.data.confirma; 
//           console.log('AAAAAAAAAAAAAAAAAAAAAAAAA' + alterou);
//         } catch (err) {
//             console.log('Erro: ' + err);
//         }
    
//         if (alterou) {            
//             mudaTela(0);
//         } else {
//           alert('Falha no cadastro');
//         }
        
//       }



//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity>
//                     <TouchableOpacity onPress={() => mudaTela(0)}>
//                         <Image source={require('../../assets/arrow-back-black.png')} />
//                     </TouchableOpacity>
//                 </TouchableOpacity>

//                 <Text style={styles.text_header}>Editar perfil</Text>
//             </View>

//             <KeyboardAvoidingView style={styles.container_input}>
//                 <TextInput
//                     style={styles.inputBusca}
//                     value={nome}
//                     onChangeText={(n) => setNome(n) }
//                     placeholderTextColor='#C5C5C6'
//                     underlineColorAndroid='transparent'
//                 />

//                 <TextInput
//                     style={styles.inputBusca}
//                     value={email}
//                     onChangeText={(e) => setEmail(e) }
//                     placeholderTextColor='#C5C5C6'
//                     underlineColorAndroid='transparent'
//                 />
//             </KeyboardAvoidingView>

//             <TouchableOpacity style={styles.btn_salvar} onPress={() => attCadastro()}>
//                 <Text style={styles.text_btn_salvar}>Salvar</Text>
//             </TouchableOpacity>

//         </View>
//     )
// }
