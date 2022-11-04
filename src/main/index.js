import { useState, useEffect } from 'react';
import { BottomTabView } from '@react-navigation/bottom-tabs';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            { id: 0, tipo: 'Tipo' },
            { id: 1, tipo: 'Lanche' },
            { id: 2, tipo: 'Porção' },
            { id: 3, tipo: 'Suco' }
        ]
    );

    // produtos
    const [produtos, setProdutos] = useState([
        { proId: 0, proNome: 'Teste', img: img1, valor: '15,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.' },
        { proId: 1, proNome: 'Lanche de Peixe', img: img1, valor: '25,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { proId: 2, proNome: 'Bolo', img: img1, valor: '10,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { proId: 3, proNome: 'Fritas rústica da casa ao lado do vizinho', img: img1, valor: '19,00', avaliacao: 4.3 },
        { proId: 4, proNome: 'Suco de laranja', img: img1, valor: '8,25', avaliacao: 4.3 },
        { proId: 5, proNome: 'Suco verde', img: img1, valor: '12,00', avaliacao: 4.3 },
        { proId: 6, proNome: 'Suco', img: img1, valor: '13,00', avaliacao: 4.3 },
        { proId: 7, proNome: 'Suco', img: img1, valor: '14,00', avaliacao: 4.3 },
        { proId: 8, proNome: 'Suco', img: img1, valor: '15,00', avaliacao: 4.3 },
        { proId: 9, proNome: 'Suco', img: img1, valor: '16,00', avaliacao: 4.3 },
        { proId: 10, proNome: 'Suco', img: img1, valor: '17,00', avaliacao: 4.3 },
        { proId: 11, proNome: 'Suco', img: img1, valor: '18,00', avaliacao: 4.3 },
        { proId: 12, proNome: 'Suco', img: img1, valor: '19,00', avaliacao: 4.3 },
    ]);

    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 10;
    const [loading, setLoading] = useState(false);

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    // async function listaProduto(){
    //     try{
    //       const response = await api.get('produtos', {
    //         params: {page, limit}
    //       });
    //       setProdutos(response.data.message);
    //     } catch (e) {
    //       setProdutos([]);
    //       console.log('erro' + e)
    //     }
    //   }

    //   useEffect(() => {
    //     listaProduto();
    //   }, [])

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
<<<<<<< Updated upstream

                <View style={styles.background}>
                    <Text style={styles.textPrincipal}>Bem Vindo!</Text>
                    <View style={styles.containerFoto}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.nome_usuario}>Simas Turbo Pinto da Silva</Text>
                        <Image source={require('../../assets/profile.jpg')} style={styles.foto} />
                    </View>
=======
                <View style={styles.background}>
                    <Text style={styles.textPrincipal}>Principal</Text>
>>>>>>> Stashed changes
                    <View style={styles.containerInput}>
                        <Ionicons name='search-outline' size={20} color='#C5C5C6' />
                        <TextInput
                            style={styles.inputBusca}
                            placeholder='O que deseja?'
                            placeholderTextColor='#C5C5C6'
                            underlineColorAndroid='transparent'
                        />
                    </View>
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

                            {/* <New
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
                        /> */}
                            <FlatList
                                data={produtos}
                                renderItem={({ item }) => <New item={item} navigation={navigation} />}
                                keyExtractor={item => item.proId}
                                numColumns={1}
                                horizontal={true}
                                style={styles.flat}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                disableScrollViewPanResponder={true}
                                scrollEnabled={false}
                                nestedScrollEnabled={false}
                            />
                        </ScrollView>
                    </ScrollView >
                </View>

                <View style={styles.containerPopular}>
                    <Text style={styles.title}>Mais populares</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#FFA500', marginRight: 20, fontWeight: "bold" }}>Ver mais</Text>
                    </TouchableOpacity>
                </View>

                <SafeAreaView>
                    <FlatList
                        data={produtos}
                        renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} />}
                        keyExtractor={item => item.proId}
                        numColumns={1}
                        style={styles.flat}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        disableScrollViewPanResponder={true}
                        scrollEnabled={false}
                        nestedScrollEnabled={false}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}
