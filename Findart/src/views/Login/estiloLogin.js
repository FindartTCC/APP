import { StyleSheet } from "react-native";

const estiloLogin = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda: {
        backgroundColor: '#A61F2B',
        width: '80%',
        height: '230',
        borderRadius: 10,
    },
    titulo: {
        fontSize:40,
        color: '#F2A74B',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 0,
        
    },
    texto: {
        fontSize:30,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
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

export default estiloLogin;