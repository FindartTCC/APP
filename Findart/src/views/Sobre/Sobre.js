import React from 'react';
import { Text,RefreshControl, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import estiloSobre from './estiloSobre';
import Rafa from "../../imgs/rafael.jpeg"

import Vitor from "../../imgs/vitor.jpeg"
import Math from "../../imgs/math.jpeg"
import Jose from "../../imgs/jose.jpeg"


function Sobre ({navigation}) {
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloSobre.container}>
            <View style={estiloSobre.borda}>
                <ScrollView 
            
            showsVerticalScrollIndicator={false}
            >
                <Text style={estiloSobre.subtitulo}>Sobre</Text>
                <Text style={estiloSobre.subtitulo}>Resumo</Text>
                <Text style={estiloSobre.textocorrido}>O seguinte Trabalho de Conclusão de Curso constitui um aplicativo e site desenvolvidos com a proposta de ser uma facilidade na questão de divulgação e de comércios no meio artístico.</Text>
                <Text style={estiloSobre.textocorrido}>Aqui, o usuários podem seguir seus artistas favoritos, conhecer novos e, caso também tenham algo a mostrar, bastam poucos segundos para que sua arte seja compartilhada</Text>
                <Text style={estiloSobre.subtitulo}>Objetivos</Text>
                <Text style={estiloSobre.textocorrido}>Esse projeto busca promover uma visibilidade aos diversos campos da arte. Ajudar na geração de renda para pessoas que produzem arte. Iniciantes ou não, poderão despertar carreiras, suprir necessidades, entreter e democratizar o acesso à cultura.</Text>
                <Text style={estiloSobre.subtitulo}>Funcionalidades</Text>
                <Text style={estiloSobre.textocorrido}>Com a criação de uma conta, a pessoa poderá interagir com artistas de diversas partes da região ou do mundo. Assim, verá fotos, vídeos e outras diversas mídias a fim de divulgação.</Text>
                <Text style={estiloSobre.textocorrido}>Caso seja da vontade, poderá também acessar um campo de compras ou de bate-papo, para adquirir produtos ou eventos artísticos.</Text>
                <Text style={estiloSobre.subtitulo}>Integrantes</Text>
                <Text style={estiloSobre.textocorrido}>Rafael Malaman Pfleger</Text>
                <View style={estiloSobre.container}>
                <Image
                style={estiloSobre.img}
                source={Rafa}
                />
                </View>
                <Text style={estiloSobre.textocorrido}>Vitor Augusto dos Santos Lopes</Text>
                
                <View style={estiloSobre.container}>
                <Image
                style={estiloSobre.img}
                source={Vitor}
                />
                </View>
                <Text style={estiloSobre.textocorrido}>Matheus Henrique Secherini</Text>
                
                <View style={estiloSobre.container}>
                <Image
                style={estiloSobre.img}
                source={Math}
                />
                </View>
                <Text style={estiloSobre.textocorrido}>José Mateus Chavare</Text>
                
                <View style={estiloSobre.container}>
                <Image
                style={estiloSobre.img}
                source={Jose}
                />
                </View>
                </ScrollView>   
                <TouchableOpacity style={estiloSobre.botaoContainer} onPress={voltar}>
                    <Text style={estiloSobre.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Sobre;