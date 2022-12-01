import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, FlatList, LogBox } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import CardItemHorizontal from '../produtos/card_item_horizontal';
import user from '../../assets/user1.png'

import SwiperComponent from './components/swiper.js';
import New from '../main/components/New';
import api from '../services/api'

export default function Main({ navigation, route  }) {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);    

    /* Criando um controlador de estados */
    const [nome, setNome]           = useState(route.params.nome);
    const [produtos, setProdutos]   = useState([]);
    const [produtos2, setProdutos2] = useState([]);    

    /* Armazenando os registros da API em variáveis */
    const id    = route.params.id;
    const email = route.params.email;
    const info  = {id, nome, email};
    
    /* Funções que listam produtos */
    async function listaAleatorio(){
        try{
            const response = await api.get('produtosal')
            setProdutos(response.data.message)
        } catch(e){
            setProdutos([])
            console.log('ERRO: ' + e)
        }  
    }

    async function listaAleatorio2(){
        try{
            const response = await api.get('produtosal')
            setProdutos2(response.data.message)
        } catch(e){
            setProdutos2([])
            console.log('ERRO: ' + e)
        }  
    }

    async function attNome() {  
        let alterou = false;
        try {
          
          const response = await api.get('usuarios/' + id);
          alterou = response.data.confirma;
          setNome(response.data.message.usuNome); 
        } catch (err) {
            console.log('Erro: ' + err);
            return false;
        }
    }

    /* Componente que renderiza e atualiza a página */
    useEffect(() => {
        listaAleatorio(),
        listaAleatorio2()
        const atualiza = navigation.addListener('focus', ()=> {

            attNome()
        })
    }, [navigation]);         

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.background}>
                    <Text style={styles.textPrincipal}>Bem Vindo(a)</Text>
                    <View style={styles.containerFoto}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.nome_usuario}>{nome}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Perfil', {info})}>
                            <Image style={styles.foto} source={user} />
                            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerInput}>
                        <Ionicons name='search-outline' size={20} color='#C5C5C6' />
                        <TextInput
                            style={styles.inputBusca}
                            placeholder='O que deseja?'
                            placeholderTextColor='#C5C5C6'
                            underlineColorAndroid='transparent'                            
                            onPressIn={() => navigation.navigate('Buscar')}
                        />
                    </View>
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
                            <FlatList
                                data={produtos2}
                                renderItem={({ item }) => <New item={item} navigation={navigation} id={id} />}
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
                </View>

                <SafeAreaView>
                    <FlatList
                        data={produtos}
                        renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} id={id}  />}
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
        </SafeAreaView>
    );
}
