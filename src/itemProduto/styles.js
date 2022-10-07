import { StyleSheet, Dimensions  } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',        
        width: '100%',                    
    },
    text: {
        fontSize: 16,
    },
    containerHeader: {
        height: 400,
    },
    imgPrincipal: {        
        width: '100%',
        height: '100%',
    },
    containerHeaderBotoes: {        
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 12,
        marginLeft: 12,
        marginRight: 12,
    },
    containerTituloPreco: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-end",
    },
    TextTitulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 16,
        marginRight: 14,
    },
    TextPreco: {
        marginRight: 30,
        marginBottom: 2,
        fontSize: 18,
        fontWeight: "bold",
    },
    TextDescricao: {
        fontSize: 16,        
        marginLeft: 16,
        marginRight: 14,
        marginTop: 12,
        color: '#808080',
    },
    containerFooter: {
        position: "absolute",
        width: '92%',
        bottom: 12,
        marginLeft: 14,
        alignItems: "center",        
        justifyContent: 'center',       
        height: 50, 
        backgroundColor: '#FFA500',
        borderRadius: 25,
    },
    TextCategoria: {
        marginLeft: 16,
        marginRight: 14,
        marginTop: 18,
        marginBottom: -3,
        color: '#808080',        
    },
    btnAdicionar: {
        height: 45,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    avaliacao: {
        flexDirection: "row",        
        marginLeft: 16,         
        alignItems: "center",
    },
    textAvaliacao: {
        color: '#808080',
        marginRight: 5,
    },
});

export default styles;