import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 8,
        width: '100%',
    },
    text: {
        fontSize: 16,
    },
    containerImage: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    borderProfile: {
        width: 110,
        height: 110,
        borderRadius: 200 / 2
    },    
    textNomeUsuario: {
        marginTop: 20,
        marginBottom: 25,
        fontSize: 20,
        fontWeight: "bold",
        width: '100%',
        textAlign: 'center',
    },
    imageItens: {
        marginLeft: 10,
    },
    containerItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",        
        width: '100%',
        height: 70,
        borderBottomWidth: 0.3,
        borderBottomColor: '#696969',
    },    
    textItemPrincipal: {
        fontWeight: 'bold',
        marginLeft: 12,
        color: '#696969'
    },
});

export default styles;