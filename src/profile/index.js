import { Text, View } from 'react-native';
import styles from './styles';

export default function Perfil() {
    return(
        <View style={styles.container}>
            <View style={styles.caixa}> 
                <View style={styles.header}>
                    <View style={styles.foto}>   
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.nome}>Olá Cleiton</Text>
                        <Text style={styles.local}>Pindamonhangaba</Text>
                    </View>
                </View>

                <View style={styles.body}>

                </View>    
                
            </View>
        </View>
    );
}
