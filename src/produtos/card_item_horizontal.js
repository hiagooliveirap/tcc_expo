import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function CardItemHorizontal({item, navigation}) {
    return(
        <TouchableOpacity style={styles.containerHorizontal} onPress={() => navigation.navigate('ItemProduto', {item})}>            
                <Image style={styles.imgHorizontal} source={{uri: item.proImagem}}/>                                
                <View style={styles.containerValorHorizontal}>           
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.txtNomeHorizontal} >{item.proNome}</Text>                                                                           
                    <Text style={styles.txtValorHorizontal}>R$ {item.proPreco}</Text>            
                </View>    
        </TouchableOpacity>        
    )
}
