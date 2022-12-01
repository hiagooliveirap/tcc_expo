import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
    containerLogo: {
        justifyContent: 'center',
        marginTop: '40%',
        marginBottom: 40,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 30,

    },
    input: {
        backgroundColor: '#EAEAEA',
        width: '90%',
        marginBottom: 30,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnSubmit: {
        width: '90%',
        height: 45,
        backgroundColor: '#F0B212',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    txtSubmit: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnRegister: {
        marginTop: 10,
    },
    txtRegister: {
        fontWeight: 'bold',
        marginBottom: 10,
    },

});

export default styles;