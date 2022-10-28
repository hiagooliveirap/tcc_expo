import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8,
        width: '100%',
    },
    header: {
        width: '91%',
        marginLeft: 16,
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 60,
        alignItems: "center",
    },
    container_input: {
        justifyContent: 'center',
        height: 120,
    },
    inputBusca: {        
        borderWidth: 0,
        height: 60,
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        marginTop: 20,
        backgroundColor: '#F8F8F8',        
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