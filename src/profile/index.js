import { Text, View,TouchableOpacity,Image } from 'react-native';
import styles from './styles';

export default function Perfil({navigation}) {
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
                        <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('Favoritos')}>
                            <Image style={{width:25 , height:25}} source={require('../../assets/icon/estrela.png')} />
                            <Text style={styles.textoMenu}>Favoritos</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={styles.icon}>
                        <Image style={{width:25 , height:25}} source={require('../../assets/icon/info.png')} />
                            <Text style={styles.textoMenu}>Minhas informações</Text>
                        </TouchableOpacity> */}

                        {/* <TouchableOpacity style={styles.icon}>
                        <Image style={{width:25 , height:25}} source={require('../../assets/icon/config.png')} />
                            <Text style={styles.textoMenu}>Configurações</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>


                
            </View>
        </View>
    );
}
