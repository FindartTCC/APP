import { StyleSheet } from "react-native";

const estiloSobre = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    borda: {
        backgroundColor: '#F2A74B',
        width: '80%',
        height: '100%',
        borderRadius: 10,
        
    },
    texto: {
        fontSize:30,
        color: '#420000',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    subtitulo: {
        fontSize:25,
        color: '#420000',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    textocorrido: {
        fontSize:20,
        color: '#420000',
        textAlign: 'justify',
        padding: 5,

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


})

export default estiloSobre;