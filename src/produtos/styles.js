import { StyleSheet, Dimensions } from "react-native";
// import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFFFE',
        padding: 8,
        width: '100%',
    },
    flat: {
        marginTop: 20,
        marginBottom: Dimensions.get('window').height / 5,
    },
    containerInput: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        paddingRight: 12,
        paddingLeft: 12,
        flexDirection: 'row',
        marginTop: 30,
        fontSize: 18,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        elevation: 2,
    },
    inputBusca: {
        flex: 1,
        marginLeft: 12,
        height: 37,
        backgroundColor: 'transparent',
        fontSize: 18,
        borderWidth: 0,
        color: '#000',
    },
    elevation: {
        elevation: 100,
        shadowColor: '#E0E0E0',
    },
    // text: {
    //     fontSize: 16,
    // },
    itemPesquisa: {
        width: Dimensions.get('window').width / 2.3,
        height: Dimensions.get('window').height / 2.6,
        margin: 7,
        marginBottom: 20,
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtNome: {
        marginTop: 20,
        fontWeight: "bold",
        marginLeft: 12,
        marginRight: 5,
        fontSize: 15,
        height: '10%',
        color: '#000',
    },
    txtValor: {
        fontWeight: "bold",
        fontSize: 20,
        alignItems: 'flex-start',
        marginLeft: 3,
    },
    img: {
        width: '100%',
        height: '65%',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderColor: '#E0E0E0',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    containerAvaliacao: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-start",
        marginLeft: 12,
    },
    txtAvaliacao: {
        color: '#FEC432',
        marginLeft: 5,
        fontSize: 17,
    },
    containerAvaliacaoItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    containerFiltros: {
        width: '100%',
        height: 48,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    itemFiltros: {
        flexDirection: "row",
        alignItems: "center",
        width: 90,
        borderWidth: 2,
        borderRadius: 25,
        padding: 5,
        height: 40,
        borderColor: '#FFA500',
        marginLeft: 10,
    },
    itemFiltrosSelecionado: {
        flexDirection: "row",
        alignItems: "center",
        width: 90,
        borderRadius: 25,
        padding: 5,
        height: 40,
        marginLeft: 10,
        backgroundColor: '#FFA500',
    },
    itemOrdenar: {
        flexDirection: "row",
        alignItems: "center",
        width: 100,
        borderWidth: 2,
        borderRadius: 25,
        padding: 5,
        height: 40,
        borderColor: '#FFA500',
        marginLeft: 10,
    },
    textFiltros: {
        color: '#FFA500',
        marginLeft: 6,
    },
    textFiltrosSelecionado: {
        color: '#FFF',
        marginLeft: 6,
    },
    containerValor: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16,
        marginTop: 10,
    },

    /* Horizontal */

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
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "bold",
        maxWidth: 210,
    },
    txtValorHorizontal: {
        color: '#FFA500',
        fontWeight: "600",
    },
});

export default styles;