import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function EditaPerfil({navigation}) {
    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../../assets/arrow-back-simple.png')} />
                </TouchableOpacity>            

                <TouchableOpacity onPress={() => navigation.navigate('EditaPerfil')}>
                    <Image source={require('../../assets/botao-editar.png')} />
                </TouchableOpacity>            
           </View>              
        </View>
    )
}