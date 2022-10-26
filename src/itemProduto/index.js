import { Text, View, ImageBackground, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foto from '../../assets/blog-3.jpg';
import iconeVoltar from '../../assets/arrow.png';

export default function ItemProduto({ route, navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <ImageBackground source={{uri: route.params.item.proImagem}} style={styles.imgPrincipal}>
                    <View style={styles.containerHeaderBotoes}>
                        <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
                            <Image source={iconeVoltar} style={{ width: 34, height: 34 }} />
                        </TouchableOpacity>

                        {/* <TouchableOpacity>
                            <Ionicons name="heart-circle" size={40} color="#FFA500" />
                        </TouchableOpacity> */}
                    </View>
                </ImageBackground>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerBody}>
                    <Text style={styles.TextCategoria}>Lanches</Text>
                    <View style={styles.containerTituloPreco}>
                        <Text style={styles.TextTitulo}>{route.params.item.proNome}</Text>
                        <Text style={styles.TextPreco}>R$ {route.params.item.tamPreco}</Text>
                    </View>
                    {/* <View style={styles.avaliacao}>                    
                    <Text style={styles.textAvaliacao}>4.3</Text>
                    <Ionicons name='star' size={16} color='#FEC432' />                    
                </View>        */}

                    <Text style={styles.TextDescricao}>{route.params.item.proDescricao}</Text>
                </View>
            </ScrollView>


            <TouchableOpacity style={styles.containerFooter}>
                <Text style={{ color: '#FFF', fontSize: 15 }}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
        </View>
    );
}
