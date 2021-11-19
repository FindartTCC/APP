import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloCategorias from './estiloCategorias';
function Categorias ({navigation}) {
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloCategorias.container}>
            <View style={estiloCategorias.borda}>

                <Text style={estiloCategorias.texto}>Categorias</Text>
                <Text style={estiloCategorias.textocorrido}>VAZIO</Text>
                <TouchableOpacity style={estiloCategorias.botaoContainer} onPress={voltar}>
                    <Text style={estiloCategorias.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Categorias;