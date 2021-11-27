import { StyleSheet } from "react-native";

const estiloInicial = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: '100%'
    },
    containerMenu: {
        
        
        alignItems: 'center',
        
    },
    borda: {
        backgroundColor: '#f5c58e',
        width: '80%',
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
        marginBottom: 0,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height:40,
        width: '80%',
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

})

export default estiloInicial;