import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 8,
        width: '100%',

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
        width: '100%',
        alignItems: 'center',
    },
    title: {
        paddingHorizontal: 15,
        fontSize: 18,
        color: '#4f4a4a',
        marginTop: 10,
    }
});

export default styles;