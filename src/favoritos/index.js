import { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import styles from './styles';
import api from '../services/api';
import CardItemFavoritos from './card_item_favoritos';
import ImgNoResults from '../../assets/no-results-found.png';

export default function Favoritos({navigation, route}) {
  /* Criando controladores de estado */
  const [produtos, setProdutos] = useState([])
  const [qtdFav, setQtdFav]     = useState(true);

  /* Criando variável que armazena o código do usuário logado */    
  const id = route.params.id
  
  /* Função que é responsável por listar todos meus favoritos */
  async function listaFavorito() {
    try {
      const response = await api.get('favoritos/' + id);
      setQtdFav(response.data.nResults == 0 ? true : false)
      setProdutos(response.data.message);
    } catch (e) {
      setProdutos([]);
      console.log('erro' + e)
    }
  }
    
  /* Componente que renderiza e atualiza a página */
  useEffect(() => {
    const atualiza = navigation.addListener('focus', ()=> {
    listaFavorito();
    })
  }, [navigation])

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>                
        <Text style={styles.text_header}>Meus favoritos</Text>
      </View>

      {
        qtdFav === true
        ?
        <View style={{ alignItems: 'center'}}>
          <Image source={ImgNoResults} style={{ height: '70%', width: '60%'}} />
          <Text style={{ fontWeight: "bold",fontSize: 26, marginBottom: 12 }}>Ops!</Text>
          <Text>Você não possui favorito(s)</Text>
        </View>
      :
          
        <FlatList
          data={produtos}
          renderItem={({ item }) => <CardItemFavoritos item={item} navigation={navigation} listaFavorito={listaFavorito} id={id} />}
          keyExtractor={item => item.usu_id + item.pro_id}
          numColumns={1}
          style={styles.flat}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          disableScrollViewPanResponder={true}
          nestedScrollEnabled={false}
        />
      }
    </SafeAreaView>
  )
}
