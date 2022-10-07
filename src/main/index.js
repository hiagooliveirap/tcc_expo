import { useState } from 'react';
import { BottomTabView } from '@react-navigation/bottom-tabs';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import CardItemHorizontal from '../produtos/card_item_horizontal';

import SwiperComponent from './components/swiper.js';
import New from '../main/components/New';

import img1 from '../../assets/product-7.jpg';

export default function Main({ navigation }) {
    const [tipoSel, setTipoSel] = useState([]);

    //const [tipoProduto, setTipoProduto] = useState(['Tipo', 'Lanche', 'Porção', 'Suco']); 
    const [tipoProduto, setTipoProduto] = useState(
      [
        {id : 0, tipo : 'Tipo'}, 
        {id : 1, tipo : 'Lanche'}, 
        {id : 2, tipo : 'Porção'}, 
        {id : 3, tipo : 'Suco'}
      ]
    ); 
  
    // produtos
    const [produtos, setProdutos] = useState(
      [
        {id: 0, nome: 'Lanche de Frango', img: img1, valor: '15,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.'}, 
        {id: 1, nome: 'Lanche de Peixe', img: img1, valor: '25,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
        {id: 2, nome: 'Bolo', img: img1, valor: '10,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
        {id: 3, nome: 'Fritas rústica da casa ao lado do vizinho', img: img1, valor: '19,00', avaliacao: 4.3}, 
        {id: 4, nome: 'Suco de laranja', img: img1, valor: '8,25', avaliacao: 4.3}, 
        {id: 5, nome: 'Suco verde', img: img1, valor: '12,00', avaliacao: 4.3}, 
        {id: 6, nome: 'Suco', img: img1, valor: '13,00', avaliacao: 4.3}, 
        {id: 7, nome: 'Suco', img: img1, valor: '14,00', avaliacao: 4.3}, 
        {id: 8, nome: 'Suco', img: img1, valor: '15,00', avaliacao: 4.3}, 
        {id: 9, nome: 'Suco', img: img1, valor: '16,00', avaliacao: 4.3}, 
        {id: 10, nome: 'Suco', img: img1, valor: '17,00', avaliacao: 4.3}, 
        {id: 11, nome: 'Suco', img: img1, valor: '18,00', avaliacao: 4.3}, 
        {id: 12, nome: 'Suco', img: img1, valor: '19,00', avaliacao: 4.3}, 
      ]
    );    

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
            <ScrollView>
            <View style={styles.containerInputBusca}>
                <TextInput style={styles.inputBusca} placeholder='O que deseja?' />
            </View>

            {/* <View style={styles.contentNew}>
                <Text style={styles.title}>Promoção</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#FFA500', marginRight: 20, fontWeight: "bold" }}>Ver mais</Text>
                </TouchableOpacity>
            </View> */}

            <View style={styles.swipperContent}>
                <SwiperComponent />
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#FFA500', marginRight: 20, fontWeight: "bold" }}>Ver mais</Text>
                </TouchableOpacity>
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

            <SafeAreaView>
                {/* <FlatList 
                data={produtos} 
                renderItem={ ({item}) => <CardItemHorizontal item={item} navigation={navigation} /> } 
                keyExtractor={ item => item.id} 
                numColumns={1} 
                // style={styles.flat}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                disableScrollViewPanResponder={true} 
                scrollEnabled={false}   
                nestedScrollEnabled={false}        
                /> */}
            </SafeAreaView>  
            </ScrollView> 
        </View>
    );
}
