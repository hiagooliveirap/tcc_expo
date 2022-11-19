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
});

export default styles;  