import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../edit/styles';

export default function EditaPerfil({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Image source={require('../../../assets/arrow-back-black.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>

                <Text style={styles.text_header}>Editar perfil</Text>
            </View>

            <Image source={require('../../../assets/profile.jpg')} style={styles.foto} />

            <KeyboardAvoidingView style={styles.container_input}>
                <TextInput
                    style={styles.inputBusca}
                    placeholder='Nome'
                    placeholderTextColor='#C5C5C6'
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    style={styles.inputBusca}
                    placeholder='Email'
                    placeholderTextColor='#C5C5C6'
                    underlineColorAndroid='transparent'
                />
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.btn_salvar}>
                <Text style={styles.text_btn_salvar}>Salvar</Text>
            </TouchableOpacity>

        </View>
    )
}