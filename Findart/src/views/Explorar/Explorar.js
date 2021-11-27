import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import estiloExplorar from './estiloExplorar';
import Exemplo from "../../imgs/emicida.jpg"
import ExemploP2 from "../../imgs/raf.jpg"
import Exemplo2 from "../../imgs/jorge.jpg"
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
                
                <Text style={estiloExplorar.textoNome}><a>Emicida (Há 5 min) </a><p>Show de ontem em Guarlhos-SP</p></Text>
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
                source={ExemploP2}
                />
                
                <Text style={estiloExplorar.textoNome}>Rafael Malaman(Há 10 hrs)<p>Escultura à venda!!!</p></Text>
                
                
                </View>
                </View>

                <View style={estiloExplorar.container}>
                <Image
                style={estiloExplorar.img}
                source={Exemplo2}
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