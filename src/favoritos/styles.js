import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8,
        width: '100%',
    },
    header: {
        width: '100%',
        marginLeft: 16,
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 40,
        alignItems: "center",
    },
    foto: {
        marginBottom: '10%',
        backgroundColor: '#000',
        height: 120,
        width: 120,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: '10%',
    },
    btn_salvar: {
        position: "absolute",
        width: '104%',
        bottom: 0,
        alignItems: "center",
        justifyContent: 'center',
        height: 80,
        backgroundColor: '#008000',
    },
    text_btn_salvar: {
        color: '#FFF',
    },
    text_header: {
        fontSize: 17,
        fontWeight: 'bold',
        width: '90%',
        textAlign: 'center',
    },
    containerHorizontal: {
        width: '95%',
        flexDirection: "row",
        alignItems: "center",
        height: 120,
        margin: 7,
        marginBottom: 5,
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    imgHorizontal: {
        width: '25%',
        height: '80%',
        marginLeft: 12,
        borderRadius: 25,
        borderBottomColor: '#000',
        borderColor: '#E0E0E0',
    },
    containerValorHorizontal: {
        flex: 1,
        marginRight: 15,
        marginLeft: 20,
    },
    txtNomeHorizontal: {
        marginBottom: 3,
        fontSize: 18,
        fontWeight: "bold",
        maxWidth: 150,
    },
    txtValorHorizontal: {
        color: '#FFA500',
        fontWeight: "600",
        fontSize:17
    },
    deletar: {
        alignSelf: 'flex-end',

        marginRight: 20
    },
    TextCategoria: {
        marginBottom:3,
        color: '#808080',
        fontSize: 17        
    },
});

export default styles;  
