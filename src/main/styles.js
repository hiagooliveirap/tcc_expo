import { StyleSheet, Dimensions } from "react-native";

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
    containerInputBusca: {
        alignItems: "center",
    },
    inputBusca: {
        width: '95%',
        justifyContent: "center",
        marginTop: 10,        
        height: 40,    
        borderRadius: 7,
        backgroundColor: '#F6F5F4',
        fontSize: 18,
        borderWidth: 0,
        paddingLeft: 10,  
        color: '#000',
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
    swipperContent: {
        flexDirection: 'row',
        height: 250,
        width: '100%',
    },
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 2,
        height: 37,
        borderRadius: 10,
    },
    input: {
        paddingHorizontal: 15,
        fontSize: 13,
        width: '90%',
    },
    contentNew: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',        
        marginBottom: 2,
        marginBottom: -5,
    },
    title: {
        paddingHorizontal: 15,
        marginLeft: 3,
        fontSize: 18,
        color: '#4f4a4a',
        fontWeight: "bold",
    },
    containerPopular: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
        width: '100%',
        alignItems: 'center',        
        marginTop: 20,        
    },    
    flat: {
        marginTop: 10,
        marginBottom: Dimensions.get('window').height / 100,
    },    
});

export default styles;
