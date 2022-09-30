import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function CardItem({item, escolheItem}) {
    return(
        <TouchableOpacity>
            <View style={[styles.itemPesquisa, styles.elevation]}>
                <Image style={styles.img} source={item.img}/>                
                <View style={styles.containerAvaliacao}>
                    <Text style={styles.txtValor}>{item.valor}</Text>
                    <View style={styles.containerAvaliacaoItem}>
                        <Ionicons name='star' size={16} color='#FEC432' />
                        <Text style={styles.txtAvaliacao}>{item.avaliacao}</Text>
                    </View>
                </View>
                <Text style={styles.txtNome} adjustsFontSizeToFit>{item.nome}</Text>                                                
            </View>
        </TouchableOpacity>        
    )
}