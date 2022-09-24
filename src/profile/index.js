import { Text, View, TouchableOpacity } from 'react-native';
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
                    <View style={styles.borda}></View>

                <View style={styles.body}>
                    <View style={styles.menu}>
                        <TouchableOpacity>
                            <Text style={styles.textoMenu}>Teste</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textoMenu}>Teste</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textoMenu}>Teste</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textoMenu}>Teste</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.sair}>
                        <View>
                        <Text style={styles.sairTexto}>Teste</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}
