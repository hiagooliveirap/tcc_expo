import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItemHorizontal from './card_item_horizontal';
import api from '../services/api';
import ImgNoResults from '../../assets/no-results-found.png';


export default function Produtos({ navigation, route }) {
  const [tipoSel, setTipoSel] = useState(0);
  const [pesquisa, setPesquisa] = useState('');
  const [qtdFav, setQtdFav] = useState(true);

  //const [tipoProduto, setTipoProduto] = useState(['Tipo', 'Lanche', 'Porção', 'Suco']); 
  const [tipoProduto, setTipoProduto] = useState(
    [
      { id: 0, tipo: 'Tudo' },
      { id: 1, tipo: 'Lanche' },
      { id: 2, tipo: 'Cachorro Quente' },
      { id: 3, tipo: 'Porção' },
      { id: 4, tipo: 'Pizza' }
    ]
  );
  // produtos
  const id = route.params.id
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(false);

  function filtraTipo(v){
    setTipoSel(v)
    listaProduto(v, pesquisa)
    
  }
  function filtraNome(v){
    setPesquisa(v)
    listaProduto(tipoSel, v)
    
  }


  async function listaProduto(tipo, nome) {
    try {
      let dadosBusca = {
        proNome: nome,
        cat_Id: tipo
      };

      const response = await api.post('produtos', dadosBusca, {
        params: { page, limit }
        
      });
      setProdutos(response.data.message);
      setQtdFav(response.data.nResults == 0 ? true : false);
    } catch (e) {
      setProdutos([]);
      console.log('erro' + e)
    }
  }

  useEffect(() => {
    listaProduto(tipoSel, pesquisa);
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
            value={pesquisa}
            onChangeText={nm => filtraNome(nm)}
          />
        </View>

        <View style={styles.container_cidade}>
          <Ionicons name='location-outline' size={22} color='#FFF' />
          <Text style={styles.textoCidade}>Filtrando por: Tupã</Text>
        </View>
      </View>

      <View style={styles.containerFiltros}>
      <TouchableOpacity style={styles.itemFiltrosSelecionado}>
        <Picker
          selectedValue={tipoSel}
          style={styles.itemOrdenar}
          onValueChange={(itemValue) => filtraTipo(itemValue)}
        >
            {tipoProduto.map(tp => {
              return <Picker.Item label={tp.tipo} value={tp.id} key={tp.id} />
            })}
        </Picker>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.itemFiltrosSelecionado}>
          <Ionicons name='options-outline' size={14} color='#FFF' style={{ marginLeft: 5 }} />
          <Text style={styles.textFiltrosSelecionado}>Filtrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.itemOrdenar}>
          <Ionicons name='filter-outline' size={14} color='#FFA500' style={{ marginLeft: 5 }} />
          <Text style={styles.textFiltros}>Ordenar</Text>
        </TouchableOpacity> */}
      </View>        
      {
        qtdFav === true
        ?
        <View style={{ alignItems: 'center'}}>
          <Image source={ImgNoResults} style={{ height: 300, width: 300}} />
          <Text style={{ fontWeight: "bold",fontSize: 26, marginBottom: 12 }}>Ops!</Text>
          <Text>Infelizmente não encontramos nenhum prato</Text>
        </View>
        :

        <SafeAreaView>
        <FlatList
          data={produtos}
          renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} id={id} />}
          keyExtractor={item => item.proId}
          //numColumns={numColumns} 
          style={styles.flat}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          disableScrollViewPanResponder={true}
        />
      </SafeAreaView>
      }      
    </View>
  );
}
