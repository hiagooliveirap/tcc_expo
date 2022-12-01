import React, { useState, useEffect, useRef  } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Linking, SafeAreaView  } from 'react-native';
import styles from './styles';
import iconeVoltar from '../../assets/arrow.png';
import iconeAddFav from '../../assets/love.png';
import iconeAvatar from '../../assets/loveBorda.png';
import { Modalize } from 'react-native-modalize';
import closeModalImg from '../../assets/x.png';
import IfoodImg from '../../assets/ifood777.png';
import deliveryImg from '../../assets/DeliveryMuch.png';
import aiqfomeImg from '../../assets/aiqfome3.png';
import chamar from '../../assets/fone.png';
import whatsappImg from '../../assets/whatsapp.png';
import api from '../services/api';

export default function ItemProduto({ route, navigation}) {
    const modalizeRef = useRef(null);
    let zap = route.params.item.estWhatsapp;
    if(zap !== null){
        zap = 'https://wa.me/55' + route.params.item.estWhatsapp;
    } else{
        zap = null
    }
    const aiqfome = route.params.item.lnk_aiqfome;
    const ifood = route.params.item.lnk_ifood;
    const much = route.params.item.lnk_much;

    let linkZap = ''
    let linkFome = ''
    let linkIfood = ''
    let linkMuch = ''
    
    
    if(zap !== null){
        linkZap = <TouchableOpacity style={styles.zap} onPress={() => Linking.openURL(zap)}>
                    <Image source={whatsappImg} style={{ marginRight: 15, height: 24, width: 24}}/>
                    <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Pedir pelo WhatsApp</Text>
                </TouchableOpacity>

    } else{
        linkZap = <View></View>
    }

    if(aiqfome !== null){
        linkFome = <TouchableOpacity style={styles.aiqfome} onPress={() => Linking.openURL(aiqfome)}>
                    <Image source={aiqfomeImg} style={{ marginRight: 15, height: 24, width: 24}}/>
                    <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Pedir pelo Aiqfome</Text>
                </TouchableOpacity>

    } else{
        linkFome = <View></View>
    }

    if(ifood !== null){
        linkIfood = <TouchableOpacity style={styles.ifood} onPress={() => Linking.openURL(ifood)}>
                    <Image source={IfoodImg} style={{ marginRight: 15, height: 24, width: 24}}/>
                    <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Pedir pelo Ifood</Text>
                </TouchableOpacity>

    } else{
        linkIfood = <View></View>
    }

    if(much !== null){
        linkMuch = <TouchableOpacity style={styles.deliveryMuch} onPress={() => Linking.openURL(much)}>
                    <Image source={deliveryImg} style={{ marginRight: 15, height: 24, width: 24}}/>
                    <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Pedir pelo Delivery Much</Text>
                </TouchableOpacity>

    } else{
        linkMuch = <View></View>
    }



    function onOpen() {
        modalizeRef.current?.open();
    };

    
    const usuId = route.params.id;
    const proId = route.params.item.proId 
    const pro_id = route.params.pro_id
    const produto = proId ? proId : pro_id
    const chave = usuId + '/' + produto

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
            const response = await api.delete('favoritos/' + chave);
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
        <SafeAreaView style={styles.container}>            
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

            <View>
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
            </View>

            {/* <TouchableOpacity style={styles.containerFooter} onPress={() => Linking.openURL(zap)}> */}
            <TouchableOpacity style={styles.containerFooter} onPress={onOpen}>
                <Image source={chamar} style={{ marginRight: 15}}/>
                <Text style={{ color: '#FFF', fontSize: 17, fontWeight: 'bold' }}>Faça seu pedido!</Text>
            </TouchableOpacity>
            <Modalize
            ref={modalizeRef}
            snapPoint={380}
            modalHeight={500}
            >
                <View style={{ width: '100%', height: '100%'}}>
                    <View style={styles.headerModal}>
                        <Text style={styles.textModalTitle}>Peça já o seu!</Text>
                        {/* <TouchableOpacity>
                            <Image source={closeModalImg} style={{ height: 16, width: 16, alignSelf: 'flex-end' }} />
                        </TouchableOpacity> */}
                    </View>

                    {/* Zap */}
                    {linkZap}

                    {/* AiqFome */}
                    {linkFome}

                    {/* Ifood */}            
                    {linkIfood}

                    {/* Delivery Much */}            
                    {linkMuch}
                </View>
            </Modalize>            
        </SafeAreaView>
    );
}
