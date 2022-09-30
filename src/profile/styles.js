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
        backgroundColor: '#e6e6e6',
        margin: 13,
        borderRadius: 20,
        width: '96%',
        flexDirection:'column'
    },
    header:{
        marginTop:10,
        marginLeft:10,
        height:'15%',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderBottomColor: 'black',
        borderStyle:'solid',
        borderBottomEndRadius:2
        
    },
    borda:{
        marginTop:18,
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
        height:90,
        width: 90,
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
        
    },
    icon:{
        display:'flex',
        flexDirection:'row', 
        alignItems:'center',
        marginLeft:20,
        padding:25,
        marginTop:20,

    },
    textoMenu:{
        alignSelf:'flex-start',
        marginLeft:30,
        fontSize:24,
        //fontWeight:'bold'
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
});

export default styles