import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'; 
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItem from './card_item';
import CardItemHorizontal from './card_item_horizontal';

import img1 from '../../assets/product-7.jpg';
import img3 from '../../assets/product-1.png';
import img4 from '../../assets/burguer-2.jpg';
import img5 from '../../assets/blog-2.jpg';
import img6 from '../../assets/blog-3.jpg';


export default function Produtos({ navigation }) {    
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
        {id: 1, nome: 'Lanche de Peixe', img: img4, valor: '25,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
        {id: 2, nome: 'Bolo', img: img4, valor: '10,00', avaliacao: 4.3, descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
        {id: 3, nome: 'Fritas rústica da casa ao lado do vizinho', img: img4, valor: '19,00', avaliacao: 4.3}, 
        {id: 4, nome: 'Suco de laranja', img: img5, valor: '8,25', avaliacao: 4.3}, 
        {id: 5, nome: 'Suco verde', img: img6, valor: '12,00', avaliacao: 4.3}, 
        {id: 6, nome: 'Suco', img: img5, valor: '13,00', avaliacao: 4.3}, 
        {id: 7, nome: 'Suco', img: img6, valor: '14,00', avaliacao: 4.3}, 
        {id: 8, nome: 'Suco', img: img6, valor: '15,00', avaliacao: 4.3}, 
        {id: 9, nome: 'Suco', img: img6, valor: '16,00', avaliacao: 4.3}, 
        {id: 10, nome: 'Suco', img: img6, valor: '17,00', avaliacao: 4.3}, 
        {id: 11, nome: 'Suco', img: img6, valor: '18,00', avaliacao: 4.3}, 
        {id: 12, nome: 'Suco', img: img6, valor: '19,00', avaliacao: 4.3}, 
      ]
    );
    const numColumns = 2;
    return (       
      <View style={styles.container}>        
        <View style={styles.containerInput}>
            <Ionicons name='search-outline' size={20} color='#C5C5C6' />
            <TextInput 
                style={styles.inputBusca} 
                placeholder='O que deseja?'
                placeholderTextColor='#C5C5C6'
                underlineColorAndroid='transparent'
            />
        </View>

        <View style={styles.containerFiltros}>
          <TouchableOpacity style={styles.itemFiltrosSelecionado} onPress={() => navigation.navigate('ItemProduto')}>
            <Ionicons name='options-outline' size={14} color='#FFF' style={{marginLeft: 5}} />
            <Text style={styles.textFiltrosSelecionado}>Filtrar</Text>
          </TouchableOpacity>                    

          <TouchableOpacity style={styles.itemOrdenar}>
            <Ionicons name='filter-outline' size={14} color='#FFA500' style={{marginLeft: 5}} />
            <Text style={styles.textFiltros}>Ordenar</Text>
          </TouchableOpacity>                    
        </View>        

        <SafeAreaView>
          <FlatList 
            data={produtos} 
            renderItem={ ({item}) => <CardItemHorizontal item={item} navigation={navigation} /> } 
            keyExtractor={ item => item.id} 
            numColumns={numColumns} 
            style={styles.flat}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            disableScrollViewPanResponder={true}            
          />
        </SafeAreaView>      
      </View>
    );
}