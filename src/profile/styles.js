import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        // padding: 8,
        width: '100%',
    },
    header: {
        width: '91%',
        marginLeft: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20,
    },
    foto: {
        marginBottom: '3%',
        backgroundColor: '#000',
        height: 120,
        width: 120,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: '10%',
    },
    info: {
        alignItems: "center",
        marginTop: '2%',
    },
    nome_usuario: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },
    email_usuario: {
        color: '#FFF',
    },
    containerFooter: {
        position: "absolute",
        width: '92%',
        bottom: 12,
        marginLeft: 14,
        alignItems: "center",        
        justifyContent: 'center',       
        height: 50, 
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#FF0000',
        borderRadius: 5,
    },
    background02: {
        backgroundColor: '#FFA500',
        height: 300,
    },
    titulo_favorito: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000',
    },
    contador_favorito: {
        color: '#FFA500',
        fontWeight: "bold",
    },
});

export default styles