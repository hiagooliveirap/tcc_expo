import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

export default function Favoritos() {
    return(
        <View style={styles.container}>
            <Text>Favorito</Text>
            <TextInput placeholder='Pesquisar por ...'></TextInput>
        </View>
    );
}