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
        height: '55%',
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
        alignItems: "center",
        justifyContent: "space-between",
        width: '80%',  
        marginLeft: 5,
        marginRight: 10
    },
    TextTitulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 14,
        maxWidth: 290,
    },
    TextPreco: {
        justifyContent: 'flex-end',
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 15
    },
    TextDescricao: {
        fontSize: 16,        
        marginLeft: 16,
        marginRight: 14,
        marginTop: 12,
        height: 260,
        color: '#808080',
    },    
    TextCategoria: {
        marginLeft: 16,
        marginRight: 14,
        marginTop: 18,
        marginBottom: -3,
        color: '#808080',
        fontSize: 17        
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

    /* Modal - Settings */
    headerModal: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: 20,
    },
    textModalTitle: {
        fontWeight: "bold",
        fontSize: 20,
    },
    containerFooter: {
        width: '92%',
        position: "absolute",
        bottom: 12,
        marginLeft: 14,
        alignItems: "center",        
        justifyContent: 'center',   
        flexDirection: "row",    
        height: 50, 
        backgroundColor: '#808080',
        borderRadius: 7,
    },
    zap: {
        width: '92%',
        marginLeft: 14,
        marginBottom: 10,
        alignItems: "center", 
        paddingLeft: 20,       
        flexDirection: "row",    
        height: 60, 
        backgroundColor: '#34af23',
        borderRadius: 7,
    },
    aiqfome: {
        width: '92%',
        marginLeft: 14,
        marginBottom: 10,
        alignItems: "center",    
        paddingLeft: 20,          
        flexDirection: "row",    
        height: 60, 
        backgroundColor: '#9400d3',
        borderRadius: 7,
    },
    ifood: {
        width: '92%',
        marginLeft: 14,
        marginBottom: 10,
        alignItems: "center",        
        paddingLeft: 20,         
        flexDirection: "row",    
        height: 60, 
        backgroundColor: '#B71E23',
        borderRadius: 7,
    },    
    deliveryMuch: {
        width: '92%',
        marginLeft: 14,
        marginBottom: 10,
        alignItems: "center",        
        paddingLeft: 20,         
        flexDirection: "row",    
        height: 60, 
        backgroundColor: '#F29D00',
        borderRadius: 7,
    },        
});

export default styles;
