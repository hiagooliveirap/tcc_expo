import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView } from 'react-native';

import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardItemHorizontal from './card_item_horizontal';
import api from '../services/api';
import ImgNoResults from '../../assets/no-results-found-product.png';
import burguerLaranja from '../../assets/burguer-laranja.png';
import burguerBranco from '../../assets/burguer-branco.png';
import hotdogLaranja from '../../assets/hot-dog-laranja.png';
import hotdogBranco from '../../assets/hot-dog-branco.png';
import porcaoLaranja from '../../assets/porcao-laranja.png';
import porcaoBranco from '../../assets/porcao-branco.png';
import pizzaLaranja from '../../assets/pizza-laranja.png';
import pizzaBranco from '../../assets/pizza-branco.png';


export default function Produtos({ navigation, route }) {
  /* Criando os controladores de estados */
  const [tipoSel, setTipoSel]         = useState(0);
  const [pesquisa, setPesquisa]       = useState('');
  const [qtdFav, setQtdFav]           = useState(true);
  // const [tipoProduto, setTipoProduto] = useState(
  //   [
  //     { id: 0, tipo: 'Tudo' },
  //     { id: 1, tipo: 'Lanche' },
  //     { id: 2, tipo: 'Cachorro Quente' },
  //     { id: 3, tipo: 'Porção' },
  //     { id: 4, tipo: 'Pizza' }
  //   ]
  // );
  

  let tudo = ''
  let lanche = ''
  let hotdog = ''
  let porcao = ''
  let pizza = ''
  let validar = ''
  let tipoTudo = ''
  let tipoLanche = ''
  let tipoDog = ''
  let tipoPorcao = ''
  let tipoPizza = ''

  if(tipoSel == 0){
    validar = 0
    tudo = <View style={styles.containerBtnFilters}>
            <TouchableOpacity style={[styles.itemFiltrosSelecionado, {width: 70}]} onPress={() => filtraTipo(validar)}>              
              <Text style={[styles.textFiltrosSelecionado, { textAlign: 'center'}]}>Tudo</Text>
            </TouchableOpacity>
          </View>
  } else {
    tipoTudo = 0
    tudo = <View style={styles.containerBtnFilters}>
        <TouchableOpacity style={[styles.itemFiltrosNaoSelecionado, {width: 70}]} onPress={() => filtraTipo(tipoTudo)}>
          <Text style={[styles.textFiltrosNaoSelecionado, { textAlign: 'center'}]}>Tudo</Text>
        </TouchableOpacity>
      </View>
  }

  if(tipoSel == 1){
    validar = 1
    lanche = <View style={styles.containerBtnFilters}>
            <TouchableOpacity style={[styles.itemFiltrosSelecionado, {width: 110}]} onPress={() => filtraTipo(validar)}>
              <Image source={burguerBranco} />
              <Text style={styles.textFiltrosSelecionado}>Lanche</Text>
            </TouchableOpacity>
          </View>

  } else {
    tipoLanche = 1
    lanche =<View style={styles.containerBtnFilters}>
        <TouchableOpacity style={[styles.itemFiltrosNaoSelecionado, {width: 110}]} onPress={() => filtraTipo(tipoLanche)}>
        <Image source={burguerLaranja} />
          <Text style={styles.textFiltrosNaoSelecionado}>Lanche</Text>
        </TouchableOpacity>
      </View>
  }

  if(tipoSel == 2){
    validar = 2
    hotdog = <View style={styles.containerBtnFilters}>
            <TouchableOpacity style={[styles.itemFiltrosSelecionado, {width: 115}]} onPress={() => filtraTipo(validar)}>
              <Image source={hotdogBranco} />
              <Text style={styles.textFiltrosSelecionado}>Hot-Dog</Text>
            </TouchableOpacity>
          </View>

  } else {
    tipoDog = 2
    hotdog =<View style={styles.containerBtnFilters}>
        <TouchableOpacity style={[styles.itemFiltrosNaoSelecionado, {width: 115}]} onPress={() => filtraTipo(tipoDog)}>
          <Image source={hotdogLaranja} style={{ width: 24, height: 24}} /> 
          <Text style={styles.textFiltrosNaoSelecionado}>Hot-Dog</Text>
        </TouchableOpacity>
      </View>
  }

  if(tipoSel == 3){
    validar = 3
    porcao = <View style={styles.containerBtnFilters}>
            <TouchableOpacity style={[styles.itemFiltrosSelecionado, {width: 105}]} onPress={() => filtraTipo(validar)}>
              <Image source={porcaoBranco} /> 
              <Text style={styles.textFiltrosSelecionado}>Porção</Text>
            </TouchableOpacity>
          </View>

  } else {
    tipoPorcao = 3
    porcao =<View style={styles.containerBtnFilters}>
        <TouchableOpacity style={[styles.itemFiltrosNaoSelecionado, {width: 105}]} onPress={() => filtraTipo(tipoPorcao)}>
          <Image source={porcaoLaranja} /> 
          <Text style={styles.textFiltrosNaoSelecionado}>Porção</Text>
        </TouchableOpacity>
      </View>
  }

  if(tipoSel == 4){
    validar = 4
    pizza = <View style={styles.containerBtnFilters}>
            <TouchableOpacity style={[styles.itemFiltrosSelecionado, {width: 95}]} onPress={() => filtraTipo(validar)}>
              <Image source={pizzaBranco} /> 
              <Text style={styles.textFiltrosSelecionado}>Pizza</Text>
            </TouchableOpacity>
          </View>

  } else {
    tipoPizza = 4
    pizza =<View style={styles.containerBtnFilters}>
        <TouchableOpacity style={[styles.itemFiltrosNaoSelecionado, {width: 95}]} onPress={() => filtraTipo(tipoPizza)}>
          <Image source={pizzaLaranja} /> 
          <Text style={styles.textFiltrosNaoSelecionado}>Pizza</Text>
        </TouchableOpacity>
      </View>
  }


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
    <SafeAreaView style={styles.container}>
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
        {/* <TouchableOpacity style={styles.itemFiltrosSelecionado}> */}
          {/* <Picker
            selectedValue={tipoSel}
            style={styles.itemFiltrosNaoSelecionado}
            onValueChange={(itemValue) => filtraTipo(itemValue)}
          >
            {tipoProduto.map(tp => {
              return <Picker.Item label={tp.tipo} value={tp.id} key={tp.id} />
            })}
          </Picker> */}
        {/* </TouchableOpacity>   */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tudo}     

        {lanche}      

        {hotdog}

        {porcao}  

        {pizza}

        </ScrollView>       
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
    </SafeAreaView>
  );
}
