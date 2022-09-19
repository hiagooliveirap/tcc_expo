import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Login({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>abc</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
                <Text>Acessar tela</Text>
            </TouchableOpacity>
        </View>
    );
}