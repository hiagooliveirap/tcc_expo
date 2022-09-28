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
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#DEDADA',
        margin: 13,
        borderRadius: 20,
        width: '96%',
        // shadowRadius:12,
        // shadowColor:'black',
        flexDirection:'column',
        
    },
    header:{
        //paddingTop:2,
        marginTop:10,
        marginLeft:10,
        //flex:1,
        //backgroundColor:'#000',
        //width:'100%',
        height:'15%',
        //alignItems:'flex-end',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderBottomColor: 'black',
        borderStyle:'solid',
        borderBottomEndRadius:2
        
    },
    borda:{
        marginTop:5,
        marginLeft:'2%',
        width:'95%',
        height:2,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    foto:{
        marginBottom:'3%',
        backgroundColor:'red',
        height:80,
        width: 80,
        borderRadius:100,
    },
    info:{
        //backgroundColor:'#D6D6D6',
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
    body:{
        flex:1,
        position:'relative',
        //backgroundColor:'blue',
        // width:'100%',
        // height:'70%',
    },
    menu:{
        flex:1,
        position:'relative',
        //backgroundColor:'yellow',
        marginBottom:'20%'
    },
    textoMenu:{
        // marginTop:'3%',
        // marginBottom:'3%',
        marginLeft:'5%',
        fontSize:17,
        fontWeight:'bold'
    },
    textoTitulo:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:'3%',
        marginBottom:'3%',
        fontSize:24,
        fontWeight:'bold'
    },
    textoEndereco:{
        // marginTop:'3%',
        // marginBottom:'3%',
        marginLeft:'5%',
        fontSize:14,
    },
    footer:{
        //flex:1,
        height:'20%',
        //backgroundColor:'orange',
        position:'relative',
        alignContent:'center',
        //alignItems:'center',
        justifyContent:'center',
    },
    sair:{
        marginLeft:'20%',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        height:'40%',
        width:'60%',
        backgroundColor:'orange',
        borderRadius:7
    },
    sairTexto:{
        fontSize:22,
        fontWeight:'bold',
    },
    text: {
        fontSize: 16,
    },
    itemFavorito:{
        backgroundColor:'#CBCBCB',
        marginTop:'3%',
        marginBottom:'3%',
        width:'90%',
        marginLeft:'5%',
        borderRadius:3,
        shadowOffset:{
            width:0,
            height: 3,
        },
        shadowOpacity:0.5,
        shadowRadius:5
    }
});

export default styles;
