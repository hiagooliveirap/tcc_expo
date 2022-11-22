import { Text, View, ImageBackground, Image, TouchableOpacity, Touchable, ScrollView, Linking  } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foto from '../../assets/blog-3.jpg';
import iconeVoltar from '../../assets/arrow.png';
import iconeAddFav from '../../assets/love.png';

export default function ItemProduto({ route, navigation }) {
    const zap = 'https://wa.me/55' + route.params.item.estTelefone    
    return (        
        <View style={styles.container}>            
            <View style={styles.containerHeader}>
                <ImageBackground source={{uri: route.params.item.proImagem}} style={styles.imgPrincipal}>
                    <View style={styles.containerHeaderBotoes}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={iconeVoltar} style={{ width: 34, height: 34 }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={iconeAddFav} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerBody}>
                    <Text style={styles.TextCategoria}>Lanches</Text>
                    <View style={styles.containerTituloPreco}>
                        <Text style={styles.TextTitulo}>{route.params.item.proNome} ({route.params.item.tamNome})</Text>
                        <Text style={styles.TextPreco}>R$ {route.params.item.proPreco}</Text>
                    </View>
                    {/* <View style={styles.avaliacao}>                    
                    <Text style={styles.textAvaliacao}>4.3</Text>
                    <Ionicons name='star' size={16} color='#FEC432' />                    
                </View>        */}

                    <Text style={styles.TextDescricao}>{route.params.item.proDescricao}</Text>
                </View>
            </ScrollView>


            <TouchableOpacity style={styles.containerFooter} onPress={() => Linking.openURL(zap)}>
                <Image source={require('../../assets/whatsapp.png')} style={{ marginRight: 5}}/>
                <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Chamar a véia no zap</Text>
            </TouchableOpacity>
        </View>
    );
}
