import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import estiloCategorias from './estiloCategorias';
import Teatro from "../../imgs/teatro.jpeg"
import Pintura from "../../imgs/pint.jpg"
import Danca from "../../imgs/danc.jpg"
import Musica from "../../imgs/mus.jpg"
import Artes from "../../imgs/artes.jpg"
function Categorias ({navigation}) {
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloCategorias.container}>
            <View style={estiloCategorias.borda}>
            <ScrollView 
            
            showsVerticalScrollIndicator={false}
            >
                <Text style={estiloCategorias.texto}>Categorias</Text>
                <View style={estiloCategorias.container}>
                <Text style={estiloCategorias.texto}>Música</Text>
                    
                <Image
                style={estiloCategorias.img}
                source={Musica}
                />
                <Text style={estiloCategorias.texto}>Pintura e Desenho</Text>
                
                <Image
                style={estiloCategorias.img}
                source={Pintura}
                />
                <Text style={estiloCategorias.texto}>Dança</Text>
                
                <Image
                style={estiloCategorias.img}
                source={Danca}
                />
                <Text style={estiloCategorias.texto}>Teatro</Text>
                
                <Image
                style={estiloCategorias.img}
                source={Teatro}
                />
                <Text style={estiloCategorias.texto}>Artesanato</Text>
                    
                    <Image
                    style={estiloCategorias.img}
                    source={Artes}
                    />
                
                </View>                
                </ScrollView>
                <TouchableOpacity style={estiloCategorias.botaoContainer} onPress={voltar}>
                    <Text style={estiloCategorias.botaoTexto}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Categorias;