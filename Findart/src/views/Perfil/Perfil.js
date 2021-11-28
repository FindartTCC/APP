import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import estiloPerfil from './estiloPerfil';
import ExemploP from "../../imgs/emi.jpeg"
import Exemplo from "../../imgs/emicida.jpg"



function Perfil ({navigation}) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.borda}>
            <ScrollView 
            
            showsVerticalScrollIndicator={false}
            >
                
                <View style={estiloPerfil.container}>
                <View style={estiloPerfil.ContainerNome}>
                    
                    <Image
                style={estiloPerfil.imgP}
                source={ExemploP}
                />
                
                <Text style={estiloPerfil.textoNome}>Emicida</Text>
                </View>
                </View>

                <View style={estiloPerfil.container}>

                
                <Image
                style={estiloPerfil.img}
                source={Exemplo}
                />
                
                <Image
                style={estiloPerfil.img}
                source={Exemplo}
                />
                
                <Image
                style={estiloPerfil.img}
                source={Exemplo}
                />
                
                </View>


                

                </ScrollView>
                <TouchableOpacity style={estiloPerfil.botaoContainer} onPress={voltar}>
                    <Text style={estiloPerfil.botaoTexto}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default Perfil;