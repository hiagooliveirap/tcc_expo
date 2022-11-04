import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItem from './card_item';
import CardItemHorizontal from './card_item_horizontal';
import api from '../services/api';

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
      { id: 0, tipo: 'Tipo' },
      { id: 1, tipo: 'Lanche' },
      { id: 2, tipo: 'Porção' },
      { id: 3, tipo: 'Suco' }
    ]
  );

  // produtos
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(false);


  async function listaProduto() {
    try {
      const response = await api.get('produtos', {
        params: { page, limit }
      });
      setProdutos(response.data.message);
    } catch (e) {
      setProdutos([]);
      console.log('erro' + e)
    }
  }

  useEffect(() => {
    listaProduto();
  }, [])


  //const numColumns = 2;
  return (
    <View style={styles.container}>

      <View style={styles.background}>
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

      <View style={styles.containerFiltros}>
        <TouchableOpacity style={styles.itemFiltrosSelecionado}>
          <Ionicons name='options-outline' size={14} color='#FFF' style={{ marginLeft: 5 }} />
          <Text style={styles.textFiltrosSelecionado}>Filtrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemOrdenar}>
          <Ionicons name='filter-outline' size={14} color='#FFA500' style={{ marginLeft: 5 }} />
          <Text style={styles.textFiltros}>Ordenar</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView>
        <FlatList
          data={produtos}
          renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} />}
          keyExtractor={item => item.proId}
          //numColumns={numColumns} 
          style={styles.flat}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          disableScrollViewPanResponder={true}
        />
      </SafeAreaView>
    </View>
  );
}
