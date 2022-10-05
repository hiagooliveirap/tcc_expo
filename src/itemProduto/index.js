import { Text, View, ImageBackground, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foto from '../../assets/blog-3.jpg';

export default function ItemProduto({route}) {
    return(        
        <View style={styles.container}>            
            <View style={styles.containerHeader}>                
                <ImageBackground source={route.params.item.img} style={styles.imgPrincipal}>
                    <View style={styles.containerHeaderBotoes}>
                        <TouchableOpacity>
                            <Ionicons name='arrow-back-circle' size={40} color='#FFA500' />                                
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="heart-circle" size={40} color="#FFA500" />
                        </TouchableOpacity>
                    </View>                    
                </ImageBackground>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>   
            <View style={styles.containerBody}>                
                <Text style={styles.TextCategoria}>Lanches</Text>       
                <View style={styles.containerTituloPreco}>
                    <Text style={styles.TextTitulo}>{route.params.item.nome}</Text>                        
                </View>                     
                <View style={styles.avaliacao}>
                    <Text style={styles.TextPreco}>{route.params.item.valor}</Text>    
                    <Text style={styles.textAvaliacao}>4.3</Text>
                    <Ionicons name='star' size={16} color='#FEC432' />                    
                </View>       

                <Text style={styles.TextDescricao}>{route.params.item.descricao}</Text>                                
            </View>            
            </ScrollView>    

            
            {/* <TouchableOpacity style={styles.containerFooter}>
                <Text style={{color: '#FFF'}}>Adicionar</Text>
            </TouchableOpacity>         */}
        </View>
    );
}
