import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import lixeira from '../../assets/icon/delete.png'
import api from '../services/api'

export default function CardItemFavoritos({item, navigation, listaFavorito}) {

    async function deletaFavorito(usu_id, pro_id){ 
            try {              
              const response = await api.delete('favoritos/' + usu_id + '/' + pro_id);
              const apagou = response.data.confirma;
              listaFavorito(); 
            } catch (err) {
                console.log('Erro: ' + err);
            }
        
            
    }
    return(
        <TouchableOpacity style={styles.containerHorizontal} onPress={() => navigation.navigate('ItemProduto', {item})}>
           
                <Image style={styles.imgHorizontal} source={{uri: item.proImagem}}/>                                
                <View style={styles.containerValorHorizontal}>           
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.txtNomeHorizontal} >{item.proNome}</Text> 
                    <Text style={styles.TextCategoria}>{item.estNome}</Text>                                                       
                    <Text style={styles.txtValorHorizontal}>R$ {item.proPreco}</Text>           
                </View>
                <TouchableOpacity onPress={() =>{deletaFavorito(item.usu_id, item.pro_id)}}>
                        <Image source={lixeira} style={styles.deletar} /> 
                </TouchableOpacity>     
        </TouchableOpacity>        
    )
}
