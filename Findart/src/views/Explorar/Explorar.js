import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estiloExplorar from './estiloExplorar';
import Exemplo from "../../imgs/exemplo.jpg"
function Explorar ({navigation}) {
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloExplorar.container}>
            <View style={estiloExplorar.borda}>

                <Text style={estiloExplorar.texto}>Explorar</Text>
                <Text style={estiloExplorar.textocorrido}>Aqui estarão publicações variadas para encontrar diveros artistas diferentes</Text>
                
                
                <View style={estiloExplorar.container}>
    <Image
        style={estiloExplorar.img}
        source={Exemplo}
    />
</View>
                <TouchableOpacity style={estiloExplorar.botaoContainer} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Explorar;