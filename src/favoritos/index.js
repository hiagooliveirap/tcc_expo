import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import api from '../services/api';
import img1 from '../../assets/product-7.jpg';
import CardItemHorizontal from '../produtos/card_item_horizontal';

export default function Favoritos({navigation}) {
    const [tipoProduto, setTipoProduto] = useState(
        [
            { id: 0, tipo: 'Tipo' },
            { id: 1, tipo: 'Lanche' },
            { id: 2, tipo: 'Porção' },
            { id: 3, tipo: 'Suco' }
        ]
    );

    // produtos
    const [produtos, setProdutos] = useState(
        [
            { proid: 0, proNome: 'Lanche de Frango', img: img1, proPreco: '15,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.' },
            { proId: 1, proNome: 'Lanche de Peixe', img: img1, proPreco: '25,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { proId: 2, proNome: 'Bolo', img: img1, proPreco: '10,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { proId: 3, proNome: 'Fritas rústica da casa ao lado do vizinho', img: img1, proPreco: '19,00', avaliacao: 4.3 },
            { proId: 4, proNome: 'Suco de laranja', img: img1, proPreco: '8,25', avaliacao: 4.3 },
            { proId: 5, proNome: 'Suco verde', img: img1, proPreco: '12,00', avaliacao: 4.3 },
            { proId: 6, proNome: 'Suco', img: img1, proPreco: '13,00', avaliacao: 4.3 },
            { proId: 7, proNome: 'Suco', img: img1, proPreco: '14,00', avaliacao: 4.3 },
            { proId: 8, proNome: 'Suco', img: img1, proPreco: '15,00', avaliacao: 4.3 },
            { proId: 9, proNome: 'Suco', img: img1, proPreco: '16,00', avaliacao: 4.3 },
            { proId: 10, proNome: 'Suco', img: img1, proPreco: '17,00', avaliacao: 4.3 },
            { proId: 11, proNome: 'Suco', img: img1, proPreco: '18,00', avaliacao: 4.3 },
            { proId: 12, proNome: 'Suco', img: img1, proPreco: '19,00', avaliacao: 4.3 },
        ])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Meus favoritos</Text>
            </View>

            <FlatList
                    data={produtos}
                    renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
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
