import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';

export default function CardItem({item, escolheItem}) {
    return(
        <TouchableOpacity>
            <View>
                <Image style={styles.img} source={require('')}/>
                <Text style={styles.txtNome}>{item.nome}</Text>
                <Text style={styles.txtValor}>{item.valor}</Text>
            </View>
        </TouchableOpacity>        
    )
}