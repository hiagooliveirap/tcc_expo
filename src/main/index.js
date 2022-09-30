import React from 'react';
import { BottomTabView } from '@react-navigation/bottom-tabs';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles';

import SwiperComponent from './components/swiper.js';

export default function Main() {
    return(
        <View style={styles.container}>
            <View style={styles.containerInputBusca}>                
                <TextInput style={styles.inputBusca} placeholder='O que deseja?' />
            </View>

            <View style={styles.swipperContent}>
             <SwiperComponent /> 
            </View>
            <View style={styles.containerTextoCategoria}>
                <Text style={{fontWeight: 'bold'}}>Categorias</Text>                    

                <TouchableOpacity>
                    <Text style={{color: '#FFA500', fontWeight: 'bold'}}>Ver Tudo</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} contentContainerStyle={styles.containerAllCategoria} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.containerItemCategoria}>
                    <Image source={require('../../assets/categoria-burguer.png')} />
                    <Text style={{marginTop: 2}}>Lanches</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerItemCategoria}>
                    <Image source={require('../../assets/categoria-pizza.png')} />
                    <Text style={{marginTop: 2}}>Pizzas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerItemCategoria}>
                    <Image source={require('../../assets/categoria-porcao.png')} />
                    <Text style={{marginTop: 2}}>Porções</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerItemCategoria}>
                    <Image source={require('../../assets/categoria-burguer.png')} />
                    <Text style={{marginTop: 2}}>Hambúrguer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerItemCategoria}>
                    <Image source={require('../../assets/categoria-burguer.png')} />
                    <Text style={{marginTop: 2}}>Hambúrguer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerItemCategoria}>
                    <Image source={require('../../assets/categoria-burguer.png')} />
                    <Text style={{marginTop: 2}}>Hambúrguer</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.containerTextoCategoria}>
                    <Text style={{fontWeight: 'bold'}}>Mais populares</Text>                    

                <TouchableOpacity>
                    <Text style={{color: '#FFA500', fontWeight: 'bold'}}>Ver Tudo</Text>
                </TouchableOpacity>
            </View>

            <View style={{height: 380}}>

            </View>
        </View>
    );
}