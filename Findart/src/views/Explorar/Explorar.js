import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import estiloExplorar from './estiloExplorar';
import Exemplo from "../../imgs/emicida.jpg"
import ExemploP from "../../imgs/emi.jpeg"
function Explorar ({navigation}) {
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloExplorar.container}>
            <View style={estiloExplorar.borda}>
            <ScrollView 
            
            showsVerticalScrollIndicator={false}
            >
                <Text style={estiloExplorar.texto}>Explorar</Text>
                <Text style={estiloExplorar.textocorrido}>Aqui estarão publicações variadas para encontrar diveros artistas diferentes</Text>
                
                <View style={estiloExplorar.container}>
                <View style={estiloExplorar.ContainerNome}>
                    
                    <Image
                style={estiloExplorar.imgP}
                source={ExemploP}
                />
                
                <Text style={estiloExplorar.textoNome}><a>Emicida </a><p>Há 5 min</p></Text>
                
                    
                </View>
                </View>

                <View style={estiloExplorar.container}>
                <Image
                style={estiloExplorar.img}
                source={Exemplo}
                />
                </View>

                <View style={estiloExplorar.container}>
                <View style={estiloExplorar.ContainerComenta}>
                <TouchableOpacity style={estiloExplorar.botao} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Curtir</Text>
                </TouchableOpacity><TouchableOpacity style={estiloExplorar.botao} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Comentar</Text>
                </TouchableOpacity><TouchableOpacity style={estiloExplorar.botao} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Compartilhar</Text>
                </TouchableOpacity>
                
                </View>
                </View>
                
                





                <View style={estiloExplorar.container}>
                <View style={estiloExplorar.ContainerNome}>
                    
                    <Image
                style={estiloExplorar.imgP}
                source={ExemploP}
                />
                
                <Text style={estiloExplorar.textoNome}><a>Emicida </a><p>Há 5 min</p></Text>
                
                    
                </View>
                </View>

                <View style={estiloExplorar.container}>
                <Image
                style={estiloExplorar.img}
                source={Exemplo}
                />
                </View>

                <View style={estiloExplorar.container}>
                <View style={estiloExplorar.ContainerComenta}>
                <TouchableOpacity style={estiloExplorar.botao} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Curtir</Text>
                </TouchableOpacity><TouchableOpacity style={estiloExplorar.botao} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Comentar</Text>
                </TouchableOpacity><TouchableOpacity style={estiloExplorar.botao} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Compartilhar</Text>
                </TouchableOpacity>
                
                </View>
                </View>


                </ScrollView> 
                <TouchableOpacity style={estiloExplorar.botaoContainer} onPress={voltar}>
                    <Text style={estiloExplorar.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Explorar;