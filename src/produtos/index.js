import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'; 
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItem from './card_item';

import img1 from '../../assets/burguer-card.png';
import img2 from '../../assets/burguer-card.png';
import img3 from '../../assets/burguer-card.png';
import img4 from '../../assets/burguer-card.png';
import img5 from '../../assets/burguer-card.png';
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
        {id: 0, nome: 'Lanche de Frango', img: img1, valor: 'R$ 15,00', avaliacao: 4.3}, 
        {id: 1, nome: 'Lanche de Peixe', img: img2, valor: 'R$ 25,00', avaliacao: 4.3}, 
        {id: 2, nome: 'Bolo', img: img3, valor: 'R$ 10,00', avaliacao: 4.3}, 
        {id: 3, nome: 'Fritas rústica da casa ao lado do vizinho', img: img4, valor: 'R$ 19,00', avaliacao: 4.3}, 
        {id: 4, nome: 'Suco de laranja', img: img5, valor: 'R$ 8,25', avaliacao: 4.3}, 
        {id: 5, nome: 'Suco verde', img: img6, valor: 'R$ 12,00', avaliacao: 4.3}, 
        {id: 6, nome: 'Suco', img: img6, valor: 'R$ 13,00', avaliacao: 4.3}, 
        {id: 7, nome: 'Suco', img: img6, valor: 'R$ 14,00', avaliacao: 4.3}, 
        {id: 8, nome: 'Suco', img: img6, valor: 'R$ 15,00', avaliacao: 4.3}, 
        {id: 9, nome: 'Suco', img: img6, valor: 'R$ 16,00', avaliacao: 4.3}, 
        {id: 10, nome: 'Suco', img: img6, valor: 'R$ 17,00', avaliacao: 4.3}, 
        {id: 11, nome: 'Suco', img: img6, valor: 'R$ 18,00', avaliacao: 4.3}, 
        {id: 12, nome: 'Suco', img: img6, valor: 'R$ 19,00', avaliacao: 4.3}, 
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
          <TouchableOpacity style={styles.itemFiltros} onPress={() => navigation.navigate('ItemProduto')}>
            <Ionicons name='options-outline' size={14} color='#FFA500' style={{marginLeft: 5}} />
            <Text style={styles.textFiltros}>Filtrar</Text>
          </TouchableOpacity>                    

          <TouchableOpacity style={styles.itemOrdenar}>
            <Ionicons name='filter-outline' size={14} color='#FFA500' style={{marginLeft: 5}} />
            <Text style={styles.textFiltros}>Ordenar</Text>
          </TouchableOpacity>                    
        </View>        

        <SafeAreaView>
          <FlatList 
            data={produtos} 
            renderItem={ ({item}) => <CardItem item={item} /> } 
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