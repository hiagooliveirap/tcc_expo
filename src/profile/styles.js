import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
        width: '100%',
    },
    caixa: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6D6D6',
        margin: 13,
        borderRadius: 20,
        width: '96%',
        shadowRadius:12,
        shadowColor:'black'
    },
    header:{
        
        backgroundColor:'#000',
        width:'100%',
        height:'17%',
        bottom: 258,
        flexDirection:'row'
    },
    foto:{
        backgroundColor:'red',
        height:'100%',
        width: '27%',
        borderRadius:100,
    },
    info:{
        backgroundColor:'green',
        height:'100%',
        width:'73%'
    },
    nome:{
        fontSize:22,
        fontWeight:'bold',
        alignContent:'center',
        justifyContent:'center',
        marginTop:15,
        marginLeft:7    
    },
    local:{
        fontSize:15,
        alignContent:'center',
        justifyContent:'center',
        marginTop:15,
        marginLeft:7  
    },
    // body:{
    //     top: 100,
    //     position:'relative',
    //     backgroundColor:'blue',
    //     width:'100%',
    //     height:'70%',
    // },
    text: {
        fontSize: 16,
    },
});

export default styles;
