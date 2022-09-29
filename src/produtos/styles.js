import { StyleSheet, Dimensions  } from "react-native";
// import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 8,
        width: '100%',                    
    },
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#000',
        height: 55,
        borderRadius: 7,
        marginBottom: 20,
        marginLeft: 10,        
        marginRight: 10,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 150,
        backgroundColor: '#F6F5F4',   
    },
    inputBusca: {
        flex: 1,
        marginLeft: 12,
        height: 37,          
        backgroundColor: 'transparent',
        fontSize: 12,
        borderWidth: 0,        
        color: '#000',
    },
    elevation: {
        elevation: 100,
        shadowColor: '#E0E0E0',     
    },
    text: {
        fontSize: 16,
    },
    itemPesquisa: {
        width: Dimensions.get('window').width / 2.3, 
        height: Dimensions.get('window').height / 3.8,  
        margin: 7, 
        // marginBottom: 20,
        paddingBottom: 20, 
        borderWidth: 1, 
        borderColor: '#E0E0E0', 
        justifyContent: 'center', 
        alignItems: 'center',  
        borderRadius: 5,              
    },
    txtNome: {
        // fontSize: RFPercentage(2.8),
        textAlign: 'center', 
        textAlignVertical: 'center', 
        marginLeft: 5,        
        marginRight: 5,
        height: '30%',
        color: '#6E6E6E',
    },
    txtValor: {
        fontWeight: "bold",
        fontSize: 18,
    },
    img: {        
        width: '100%',
        height: '60%',         
        margin: 3, 
        borderBottomWidth: 1,
        borderBottomColor: '#6E6E6E',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    containerAvaliacao: {
        flexDirection: "row",
        alignItems: "center",        
    },
    txtAvaliacao: {
        color: '#FEC432',
        marginLeft: 5,
    },
});

export default styles;