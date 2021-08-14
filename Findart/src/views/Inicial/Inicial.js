import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial ({ navigation }) {

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }

    
    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }
    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Findart</Text>
                <Text style={estiloInicial.textocorrido}>Divulgação e comércio no meio artístico</Text>
                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                    <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirSobre}>
                    <Text style={estiloInicial.botaoTexto}>Sobre</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Inicial;