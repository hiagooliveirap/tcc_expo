import { Text, View, ImageBackground, TouchableOpacity, Touchable } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foto from '../../assets/blog-3.jpg';

export default function ItemProduto() {
    return(        
        <View style={styles.container}>            
            <View style={styles.containerHeader}>                
                <ImageBackground source={Foto} style={styles.imgPrincipal}>
                    <View style={styles.containerHeaderBotoes}>
                        <TouchableOpacity>
                            <Ionicons name='arrow-back-circle' size={40} color='#FFF' />                                
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="heart-circle" size={40} color="#FFF" />
                        </TouchableOpacity>
                    </View>                    
                </ImageBackground>
            </View>

            <View style={styles.containerBody}>     
                <Text style={styles.TextCategoria}>Lanches</Text>                           
                <Text style={styles.TextTitulo}>Frango c/ Catupiry</Text>     
                <View style={styles.avaliacao}>
                    <Text style={styles.textAvaliacao}>4.3</Text>
                    <Ionicons name='star' size={16} color='#FEC432' />                    
                </View>           
                <Text style={styles.TextDescricao}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>                
            </View>

            
            <TouchableOpacity style={styles.containerFooter}>
                <Text style={{color: '#FFF'}}>Adicionar</Text>
            </TouchableOpacity>        
        </View>
    );
}