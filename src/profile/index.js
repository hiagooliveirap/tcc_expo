import { Text, View, Image, KeyboardAvoidingView, ScrollView, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function Perfil() {
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    style={styles.borderProfile} 
                    source={require('../../assets/profile.jpg')} 
                />
            </View>               

            <Text style={styles.textNomeUsuario}>Franciso Pinto da Silva</Text>            
            <ScrollView>
                <View style={styles.containerItem}>                
                </View>

                <View style={styles.containerItem}>
                 <Ionicons name='heart-outline' size={25} color='gray' style={styles.imageItens}/>                 
                 <Text style={styles.textItemPrincipal}>Favoritos</Text>                 
                </View>

                <View style={styles.containerItem}>
                 <Ionicons name='heart-outline' size={25} color='gray' style={styles.imageItens}/>                 
                 <Text style={styles.textItemPrincipal}>Favoritos</Text>                 
                </View>

                <View style={styles.containerItem}>
                 <Ionicons name='heart-outline' size={25} color='gray' style={styles.imageItens}/>                 
                 <Text style={styles.textItemPrincipal}>Favoritos</Text>                 
                </View>

                <View style={styles.containerItem}>
                 <Ionicons name='heart-outline' size={25} color='gray' style={styles.imageItens}/>                 
                 <Text style={styles.textItemPrincipal}>Favoritos</Text>                 
                </View>

                <View style={styles.containerItem}>
                 <Ionicons name='heart-outline' size={25} color='gray' style={styles.imageItens}/>                 
                 <Text style={styles.textItemPrincipal}>Favoritos</Text>                 
                </View>

                <View style={styles.containerItem}>
                 <Ionicons name='heart-outline' size={25} color='gray' style={styles.imageItens}/>                 
                 <Text style={styles.textItemPrincipal}>Favoritos</Text>                 
                </View>

                <View style={styles.containerItem}>
                 <Ionicons name='heart-outline' size={25} color='gray' style={styles.imageItens}/>                 
                 <Text style={styles.textItemPrincipal}>Favoritos</Text>                 
                </View>
            </ScrollView>
        </View>
    );
}