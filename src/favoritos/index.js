import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import api from '../services/api';
import img1 from '../../assets/product-7.jpg';
import CardItemHorizontal from '../produtos/card_item_horizontal';

export default function Favoritos({navigation, route}) {
    const [tipoProduto, setTipoProduto] = useState(
        [
            { id: 0, tipo: 'Tipo' },
            { id: 1, tipo: 'Lanche' },
            { id: 2, tipo: 'Porção' },
            { id: 3, tipo: 'Suco' }
        ]
    );

    // produtos
    const [produtos, setProdutos] = useState([])

        //const id = route.params.info.id
        const id = route.params.id
        console.log(id)
        async function listaFavorito() {
            try {
              const response = await api.get('favoritos/' + 1);
              setProdutos(response.data.message);
            } catch (e) {
              setProdutos([]);
              console.log('erro' + e)
            }
          }
        
          useEffect(() => {
            listaFavorito();
          }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Meus favoritos</Text>
            </View>

            <FlatList
                    data={produtos}
                    renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} />}
                    keyExtractor={item => item.usu_id}
                    numColumns={1}
                    style={styles.flat}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    disableScrollViewPanResponder={true}
                    nestedScrollEnabled={false}
                />
        </View>
    )
}
