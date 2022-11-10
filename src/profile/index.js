import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import styles from './styles';
import CardItemHorizontal from '../produtos/card_item_horizontal';
import img1 from '../../assets/product-7.jpg';

import api from '../services/api';

export default function Perfil({ navigation, route, at }) {
    const [exibe, setExibe] = useState(0);
    const id = route.params.id;
    const [nome, setNome] = useState(route.params.nome);
    const [email,setEmail] = useState(route.params.email);
    const item = {id, nome, email};
    const [tipoSel, setTipoSel] = useState([]);


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
        
            if (!alterou) {
                alert('Falha na atualização');
            }
        
      }

    useEffect(() => {
        atCadastro();
    }, []);

   
    

    //const [tipoProduto, setTipoProduto] = useState(['Tipo', 'Lanche', 'Porção', 'Suco']); 
    const [tipoProduto, setTipoProduto] = useState(
        [
            { id: 0, tipo: 'Tipo' },
            { id: 1, tipo: 'Lanche' },
            { id: 2, tipo: 'Porção' },
            { id: 3, tipo: 'Suco' }
        ]
    );

    // produtos
    const [produtos, setProdutos] = useState(
        [
            { id: 0, nome: 'Lanche de Frango', img: img1, valor: '15,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.' },
            { id: 1, nome: 'Lanche de Peixe', img: img1, valor: '25,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 2, nome: 'Bolo', img: img1, valor: '10,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 3, nome: 'Fritas rústica da casa ao lado do vizinho', img: img1, valor: '19,00', avaliacao: 4.3 },
            { id: 4, nome: 'Suco de laranja', img: img1, valor: '8,25', avaliacao: 4.3 },
            { id: 5, nome: 'Suco verde', img: img1, valor: '12,00', avaliacao: 4.3 },
            { id: 6, nome: 'Suco', img: img1, valor: '13,00', avaliacao: 4.3 },
            { id: 7, nome: 'Suco', img: img1, valor: '14,00', avaliacao: 4.3 },
            { id: 8, nome: 'Suco', img: img1, valor: '15,00', avaliacao: 4.3 },
            { id: 9, nome: 'Suco', img: img1, valor: '16,00', avaliacao: 4.3 },
            { id: 10, nome: 'Suco', img: img1, valor: '17,00', avaliacao: 4.3 },
            { id: 11, nome: 'Suco', img: img1, valor: '18,00', avaliacao: 4.3 },
            { id: 12, nome: 'Suco', img: img1, valor: '19,00', avaliacao: 4.3 },
        ]
    );



    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.background02}>
                <View style={styles.header}>

                    <Text style={{ fontSize: 17, fontWeight: 'bold', }}>Perfil</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('EditPerfil', {item})}>
                        <Image source={require('../../assets/edit-button-black.png')} />
                    </TouchableOpacity>
                </View>

                <Image source={require('../../assets/profile.jpg')} style={styles.foto} />

                <View style={styles.info}>
                    <Text style={styles.nome_usuario}>{nome}</Text>
                    <Text style={styles.email_usuario}>{email}</Text>
                </View>
            </View>
            <View style={styles.background}>


                <View style={styles.container_favorito}>
                    <Text style={styles.titulo_favorito}>Meus favoritos</Text>
                    <Text style={styles.contador_favorito}>22</Text>
                </View>

                <FlatList
                    data={produtos}
                    renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    style={styles.flat}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    disableScrollViewPanResponder={true}
                    scrollEnabled={false}
                    nestedScrollEnabled={false}
                />
            </View>
        </ScrollView>
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
