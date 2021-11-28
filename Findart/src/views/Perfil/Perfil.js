import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import estiloPerfil from './estiloPerfil';
import Exemplo2 from "../../imgs/pu2.jpg"
import Exemplo3 from "../../imgs/pu3.jpg"
import Exemplo4 from "../../imgs/pu4.jpg"
import ExemploP from "../../imgs/pu.jpg"
import Exemplo from "../../imgs/pu1.jpg"



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
                </View>
                <View style={estiloPerfil.ContainerDesc}>
                <Text style={estiloPerfil.textoNome}>Awatxuhu Artesanatos</Text>
                <Text style={estiloPerfil.texto}>Grupo de artistas</Text>
                <Text style={estiloPerfil.texto}>Artesãs da Comunidade </Text>
                <Text style={estiloPerfil.texto}>Indígena Puyanawa no Acre</Text>
                <Text style={estiloPerfil.textoChat}>Chat</Text>
                </View>
                

                <Image
                style={estiloPerfil.img}
                source={Exemplo}
                />

                <Image
                style={estiloPerfil.img}
                source={Exemplo2}
                />
                
                <Image
                style={estiloPerfil.img}
                source={Exemplo3}
                />
                
                <Image
                style={estiloPerfil.img}
                source={Exemplo4}
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