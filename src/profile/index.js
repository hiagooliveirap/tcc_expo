import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import CardItemHorizontal from '../produtos/card_item_horizontal';
import img1 from '../../assets/product-7.jpg';

export default function Perfil({ navigation }) {
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
    const [produtos, setProdutos] = useState(
        [
            { id: 0, nome: 'Lanche de Frango', img: img1, valor: '15,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.' },
            { id: 1, nome: 'Lanche de Peixe', img: img1, valor: '25,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 2, nome: 'Bolo', img: img1, valor: '10,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            { id: 3, nome: 'Fritas rústica da casa ao lado do vizinho', img: img1, valor: '19,00', avaliacao: 4.3 },
            { id: 4, nome: 'Suco de laranja', img: img1, valor: '8,25', avaliacao: 4.3 },
            { id: 5, nome: 'Suco verde', img: img1, valor: '12,00', avaliacao: 4.3 },
            { id: 6, nome: 'Suco', img: img1, valor: '13,00', avaliacao: 4.3 },
            { id: 7, nome: 'Suco', img: img1, valor: '14,00', avaliacao: 4.3 },
            { id: 8, nome: 'Suco', img: img1, valor: '15,00', avaliacao: 4.3 },
            { id: 9, nome: 'Suco', img: img1, valor: '16,00', avaliacao: 4.3 },
            { id: 10, nome: 'Suco', img: img1, valor: '17,00', avaliacao: 4.3 },
            { id: 11, nome: 'Suco', img: img1, valor: '18,00', avaliacao: 4.3 },
            { id: 12, nome: 'Suco', img: img1, valor: '19,00', avaliacao: 4.3 },
        ]
    );

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>

            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../../assets/arrow-back-black.png')} />
                </TouchableOpacity>

                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Perfil</Text>

                <TouchableOpacity onPress={() => navigation.navigate('EditaPerfil')}>
                    <Image source={require('../../assets/edit-button-black.png')} />
                </TouchableOpacity>
            </View>

            <Image source={require('../../assets/profile.jpg')} style={styles.foto} />

            <View style={styles.info}>
                <Text style={styles.nome_usuario}>Simas Turbo Pinto da Silva</Text>
                <Text style={styles.email_usuario}>simas@gmail.com</Text>
            </View>

            <View style={styles.background}>


                <View style={styles.container_favorito}>
                    <Text style={styles.titulo_favorito}>Meus favoritos</Text>
                    <Text style={styles.contador_favorito}>22</Text>
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
                    scrollEnabled={false}
                    nestedScrollEnabled={false}
                />
            </View>
        </ScrollView>
    );
}
