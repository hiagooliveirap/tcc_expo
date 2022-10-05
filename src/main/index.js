import React from 'react';
import { BottomTabView } from '@react-navigation/bottom-tabs';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import styles from './styles';
import { Feather } from '@expo/vector-icons'

import SwiperComponent from './components/swiper.js';
import New from '../main/components/New';

export default function Main() {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInputBusca}>
                <TextInput style={styles.inputBusca} placeholder='O que deseja?' />
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Promoção</Text>
            </View>
            <View style={styles.swipperContent}>
                <SwiperComponent />
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <View>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: '#FFF' }
                    }
                >


                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }} >

                        <New
                            cover={require('../../assets/food/lanche.png')}
                            name="X-Bacon"
                            description="Lanche do bãooo."

                        />
                        <New
                            cover={require('../../assets/food/lanche.png')}
                            name="X-Salada"
                            description="Lanche do bãooo."
                            onPress={() => navigation.navigate('Sobre')}
                        />
                        <New
                            cover={require('../../assets/food/lanche.png')}
                            name="Porcão"
                            description="Lanche do bãooo."
                            onPress={() => { }}
                        />

                    </ScrollView>
                </ScrollView >
            </View>
        </View>


    );
}
