import { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Touchable, ScrollView, Linking  } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foto from '../../assets/blog-3.jpg';
import iconeVoltar from '../../assets/arrow.png';
import iconeAddFav from '../../assets/love.png';
import iconeAvatar from '../../assets/loveBorda.png';
import api from '../services/api';

export default function ItemProduto({ route, navigation}) {
    const zap = 'https://wa.me/55' + route.params.item.estWhatsapp

    
    const usuId = route.params.id;
    const proId = route.params.item.proId 
    const pro_id = route.params.pro_id
    const produto = proId ? proId : pro_id

    //console.log(usuId + ' XXXXXXXXXXXXXXXX ' + proId + ' XXXXXXXXXXXXXXXXXXXXX ' + pro_id)
    console.log(produto)
    const [fav, setFav] = useState(false)

    async function addFav() {  
        let logou = false;
        try {
          let dadosUsu = {
            usu_id: usuId,
            pro_id: produto
          };
          
          const response = await api.post('favoritos/', dadosUsu);
          logou = response.data.confirma; 
        } catch (err) {
            console.log('Erro: ' + err);
        }
    
        if (logou) {
          setFav(true);
        } else {
          alert('Falha no cadastro');
        }
        
      }

      async function deletaFavorito(){ 
            try {              
            const response = await api.delete('favoritos/' + usuId + '/' + produto);
            const apagou = response.data.confirma;
            setFav(false);
            } catch (err) {
                console.log('Erro: ' + err);
            }
        }

        function handleFav(){
            if(fav === true){
                deletaFavorito()
            } else {
                addFav()
            }
        }
    
    
    async function verificaFavorito() {
        try {
          const response = await api.get('favoritos/' + usuId + '/' + produto);
          setFav(response.data.nResults == 0 ? false : true)
          //console.log(response.data.nResults)
        } catch (e) {
          console.log('erro' + e)
        }
      }
    
      useEffect(() => {
        verificaFavorito();
      }, [])

    return (        
        <View style={styles.container}>            
            <View style={styles.containerHeader}>
                <ImageBackground source={{uri: route.params.item.proImagem}} style={styles.imgPrincipal}>
                    <View style={styles.containerHeaderBotoes}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={iconeVoltar} style={{ width: 34, height: 34 }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleFav() }>
                            <Image source={fav === true ? iconeAddFav : iconeAvatar} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerBody}>
                    <Text style={styles.TextCategoria}>{route.params.item.estNome}</Text>
                    <View style={styles.containerTituloPreco}>
                        <Text style={styles.TextTitulo}>{route.params.item.proNome} ({route.params.item.tamNome})</Text>
                        <Text style={styles.TextPreco}>R$ {route.params.item.proPreco}</Text>
                    </View>
                    {/* <View style={styles.avaliacao}>                    
                    <Text style={styles.textAvaliacao}>4.3</Text>
                    <Ionicons name='star' size={16} color='#FEC432' />                    
                </View>        */}

                    <Text style={styles.TextDescricao}>{route.params.item.proDescricao}</Text>
                </View>
            </ScrollView>


            <TouchableOpacity style={styles.containerFooter} onPress={() => Linking.openURL(zap)}>
                <Image source={require('../../assets/whatsapp.png')} style={{ marginRight: 15}}/>
                <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Pedir pelo Whatsapp</Text>
            </TouchableOpacity>
        </View>
    );
}
