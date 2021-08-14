import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import estiloSobre from './estiloSobre';
function Sobre ({navigation}) {
    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloSobre.container}>
            <View style={estiloSobre.borda}>
                <ScrollView>
                <Text style={estiloSobre.texto}>Sobre</Text>
                <Text style={estiloSobre.subtitulo}>Resumo</Text>
                <Text style={estiloSobre.textocorrido}>O seguinte Trabalho de Conclusão de Curso é um aplicativo e site desenvolvidos com a proposta de ser uma facilidade na questão de divulgação e de comércios no meio artístico.</Text>
                <Text style={estiloSobre.textocorrido}>Aqui, o usuários podem seguir seus artistas favoritos, conhecer novos e, caso também tenham algo a mostrar, bastam poucos segundos para que sua arte seja compartilhada</Text>
                <Text style={estiloSobre.subtitulo}>Objetivos</Text>
                <Text style={estiloSobre.textocorrido}>Esse projeto busca promover uma visibilidade aos diversos campos da arte. Ajudar na geração de renda para pessoas que produzem arte, iniciantes ou não, poderão despertar carreiras, suprir necessidades, entreter e democratizar o acesso à cultura.</Text>
                <Text style={estiloSobre.subtitulo}>Funcionalidades</Text>
                <Text style={estiloSobre.textocorrido}>Com a criação de uma conta, a pessoa poderá interagir com artistas de diversas partes da região ou do mundo. Asssim, verá fotos, vídeos e outras diversas mídias a fim de divulgação.</Text>
                <Text style={estiloSobre.textocorrido}>Caso seja da vontade, poderá também acessar um campo de comprar ou de bate-papo, para adquirir produtos ou eventos artísticos.</Text>
                <Text style={estiloSobre.subtitulo}>Integrantes</Text>
                <Text style={estiloSobre.textocorrido}>Rafael Malaman Pfleger</Text>
                <Text style={estiloSobre.textocorrido}>Vitor Augusto dos Santos Lopes</Text>
                <Text style={estiloSobre.textocorrido}>Matheus Henrique Secherini</Text>
                <Text style={estiloSobre.textocorrido}>José Mateus Chavare</Text>
                </ScrollView>   
                <TouchableOpacity style={estiloSobre.botaoContainer} onPress={voltar}>
                    <Text style={estiloSobre.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Sobre;