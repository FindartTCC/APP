import { StyleSheet } from "react-native";

const estiloExplorar = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    borda: {
        backgroundColor: '#f5c58e',
        width: '100%',
        height: '100%',
        borderRadius: 0,
    },
    texto: {
        fontSize:30,
        color: '#420000',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
   
    textocorrido: {
        fontSize:20,
        color: '#420000',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,

    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height:40,
        borderWidth: 2,
        borderColor: '#D97941',
        backgroundColor: '#A61F2B',
        
        alignItems: 'center',
    },
    botao: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        //borderRadius: 5,
        height:50,
        //borderWidth: 2,
        font: 16,
        //borderColor: '#D97941',
        backgroundColor: '#A61F2B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContainerNome: {
        display: 'flex',
        borderRadius: 0,
        padding:10,
        paddingBottom:0 ,
        height:100,
        width: '80%',
        backgroundColor: '#A61F2B',
        justifyContent: 'left',
        alignItems: 'left',
        marginLeft:0 ,
        flexDirection: "row",
        borderRadius: 10
    },
    ContainerComenta: {
        display: 'flex',
        borderRadius: 0,
        padding:0,
        paddingBottom:0 ,
        marginTop: 45,
        height:80,
        width: '80%',
        backgroundColor: '#A61F2B',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:0 ,
        flexDirection: "row",
        borderRadius:10
        
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    campo: {
        backgroundColor: '#F2A74B',
        fontSize: 18,
        marginLeft:40,
        marginRight:40,
        marginTop:5,
        borderRadius:5,
        height: 40,
        paddingLeft: 10,
        color: "#420000"
    },
    textoNome: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlignVertical: 'auto'
    },
    
    img: {
        justifyContent:'center',
        height: 300,
        width: '80%',
        marginTop: 25,
        
    },
    imgP: {
    
        height: 60,
        width: 60,
        marginRight:20,
        marginBottom:0,
        marginTop: 0,
        paddingBottom:0,
        paddingTop:0,
        borderRadius: 10
    } 
})

export default estiloExplorar;