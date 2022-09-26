import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Favoritos() {
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
                        <Text style={styles.textoTitulo}>Favoritos</Text>
                        <TouchableOpacity style={styles.itemFavorito}>
                            <Text style={styles.textoMenu}>lanche</Text>
                            <Text style={styles.textoMenu}>Lanchonete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemFavorito}>
                            <Text style={styles.textoMenu}>Nome do lanche</Text>
                            <Text style={styles.textoMenu}>Lanchonete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemFavorito}>
                            <Text style={styles.textoMenu}>Nome do lanche</Text>
                            <Text style={styles.textoMenu}>Lanchonete</Text>
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
