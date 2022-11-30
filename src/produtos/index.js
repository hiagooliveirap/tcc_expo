import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItemHorizontal from './card_item_horizontal';
import api from '../services/api';
import ImgNoResults from '../../assets/no-results-found-product.png';


export default function Produtos({ navigation, route }) {
  /* Criando os controladores de estados */
  const [tipoSel, setTipoSel]         = useState(0);
  const [pesquisa, setPesquisa]       = useState('');
  const [qtdFav, setQtdFav]           = useState(true);
  const [tipoProduto, setTipoProduto] = useState(
    [
      { id: 0, tipo: 'Tudo' },
      { id: 1, tipo: 'Lanche' },
      { id: 2, tipo: 'Cachorro Quente' },
      { id: 3, tipo: 'Porção' },
      { id: 4, tipo: 'Pizza' }
    ]
  );
  /* Parametros dos produtos */
  const id                      = route.params.id
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal]       = useState(0);
  const [page, setPage]         = useState(1);
  const limit                   = 10;
  const [loading, setLoading] = useState(false);

  /* Função responsável de filtrar por categoria */
  function filtraTipo(v){
    setTipoSel(v);
    listaProduto(v, pesquisa);    
  }

  /* Função responsável de filtrar por nome do produto */
  function filtraNome(v){
    setPesquisa(v);
    listaProduto(tipoSel, v);    
  }

/* Função responsável por listar os produtos */
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
 
  /* Componente que renderiza e atualiza a página */
  useEffect(() => {
    listaProduto(tipoSel, pesquisa);
  }, [])

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
      </View>        
      {
        qtdFav === true
        ?
        <View style={{ alignItems: 'center', marginTop: 20}}>
          <Image source={ImgNoResults} style={{ height: '60%', width: '60%'}} />
          <Text style={{ fontWeight: "bold",fontSize: 26, marginBottom: 12 }}>Ops!</Text>
          <Text>Infelizmente não encontramos nenhum produto</Text>
        </View>
        :

        <SafeAreaView>
          <FlatList
            data={produtos}
            renderItem={({ item }) => <CardItemHorizontal item={item} navigation={navigation} id={id} />}
            keyExtractor={item => item.proId}          
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
