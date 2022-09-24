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
    textDestaque: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 10,
    },
    containerInputBusca: {
        alignItems: "center",
    },
    inputBusca: {
        width: '95%',
        justifyContent: "center",
        marginTop: 10,        
        height: 55,    
        borderRadius: 7,
        backgroundColor: '#F6F5F4',
        fontSize: 12,
        borderWidth: 0,
        paddingLeft: 10,  
        color: '#C5C5C6',
    },
    containerTextoCategoria: {
        width: '94%',
        marginLeft: 15,
        marginTop: 20,        
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-end",
    },
    containerAllCategoria: {
        marginLeft: 5,
        marginTop: 5,
        maxHeight: 100,
    },
    containerItemCategoria: {
        alignItems: "center", 
        margin: 5,       
        padding: 5,
        height: 90,
        width: 120,
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 7,
    },
});

export default styles;