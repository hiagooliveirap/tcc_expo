import { Text, View, Image } from 'react-native';
import styles from './styles';
import Foto from '../../assets/blog-3.jpg';
import { StatusBar } from 'expo-status-bar';

export default function ItemProduto() {
    return(        
        <View style={styles.container}>            
            <View style={styles.containerHeader}>
                <Image source={Foto} style={styles.imgPrincipal} />
            </View>
        </View>
    );
}