import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //padding: 8,
        width: '100%',
    },
    header: {
        width: '91%',
        marginLeft: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 30,
    },
    foto: {
        marginBottom: '3%',
        backgroundColor: '#000',
        height: 120,
        width: 120,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: '12%',
    },
    info: {
        alignItems: "center",
        marginTop: '2%',
    },
    nome_usuario: {
        fontSize: 18,
        fontWeight: "bold",
    },
    email_usuario: {
        color: '#808080',
    },
    container_favorito: {
        marginTop: '12%',
        marginLeft: 16,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    background: {
        marginTop: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderWidth: 0.1,
        // backgroundColor: '#000',
        borderColor: '#808080',
        borderBottomWidth: 0,
    },
    titulo_favorito: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#4f4a4a',
    },
    contador_favorito: {
        color: '#FFA500',
        fontWeight: "bold",
    },
    flat: {
        marginTop: 10,
        marginBottom: Dimensions.get('window').height / 100,
    },
});

export default styles