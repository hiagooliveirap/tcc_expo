import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function CardItem({item, navigation, id}) {
    return(
        <TouchableOpacity style={styles.itemPesquisa} onPress={() => navigation.navigate('ItemProduto', {item, id})}>            
                <Image style={styles.img} source={{uri: item.proImagem}}/>                
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.txtNome} >{item.proNome}</Text>                                                                           
                <View style={styles.containerAvaliacao}>                    
                    <View style={styles.containerAvaliacaoItem}>                        
                        <Ionicons name='star' size={12} color='#FEC432' style={{marginRight: 2}}/>
                        <Ionicons name='star' size={12} color='#FEC432' style={{marginRight: 2}}/>
                        <Ionicons name='star' size={12} color='#FEC432' style={{marginRight: 2}}/>
                        <Ionicons name='star' size={12} color='#FEC432' style={{marginRight: 2}}/>
                        <Ionicons name='star' size={12} color='#FEC432' style={{marginRight: 2}}/>
                    </View>
                </View>
                <View style={styles.containerValor}>
                    <Text style={{ color: '#FFA500', marginTop: 6, fontSize: 12, fontWeight: 'bold'}}>R$</Text>            
                    <Text style={styles.txtValor}>{item.proPreco}</Text>            
                </View>    
        </TouchableOpacity>        
    )
}
