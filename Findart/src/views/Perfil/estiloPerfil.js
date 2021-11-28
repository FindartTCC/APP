import { StyleSheet } from "react-native";

const estiloPerfil = StyleSheet.create({
    
    container: {
        flex:1,
        
        alignItems: 'center',
        
        
    },
    borda: {
        backgroundColor: '#f5c58e',
        width: '100%',
        height: '100%',
        borderRadius: 10,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    textoNome: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlignVertical: 'auto'
    },
    textoChat: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        
    },
    texto: {
        fontSize:20,
        color: '#FFFFFF',
        
        textAlign: 'center',
        padding: 0

    },
    img: {
        
        height: 300,
        width: '80%',
        marginTop: 25,
        
    },
    ContainerNome: {
        display: 'flex',
        borderRadius: 0,
        padding:10,
        paddingBottom:0 ,
        height:220,
        width: '100%',
        backgroundColor: '#A61F2B',
    
        alignItems: 'center',
        marginLeft:0 ,
        
        borderRadius: 0
    },
    ContainerDesc: {
        display: 'flex',
        borderRadius: 0,
        padding:10,
        paddingBottom:0 ,
        height: '200',
        width: '100%',
        backgroundColor: '#A61F2B',
    
        alignItems: 'center',
        marginLeft:0 ,
         
        borderRadius: 0
    },
    ContainerImg: {
        display: 'flex',
        
        padding:10,
        paddingBottom:0 ,
        height: '200',
        width: '100%',
        backgroundColor: '#f5c58e',
    
        alignItems: 'center',
        marginLeft:0 ,
         
        
    },
    imgP: {
    
        height: 200,
        width: 200,
        marginRight:20,
        marginBottom:0,
        marginTop: 0,
        paddingBottom:0,
        paddingTop:0,
        borderRadius: 200
    } 
})

export default estiloPerfil;