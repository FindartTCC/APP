import React, {useState} from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import estiloLogin from './estiloLogin';
import logo from "../../imgs/logo.png"
function Login({navigation}) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const entrar = () => {
        if(login == '' || senha =='') {
            Alert.alert(
                'Preenchimento Obrigatório',
                'Informe o login e senha',
                [
                    {text: 'OK'},
                ],
            )
        } else {
            navigation.replace('Inicial', {login: login});
        }
    }
    return (
        <View style={estiloLogin.container}>
            <img className="Logo" src={logo} alt="logo" width="250px"></img>
            <View style ={estiloLogin.borda}>
            <ScrollView 
            
            showsVerticalScrollIndicator={false}
            >
                <Text style={estiloLogin.texto}>Login</Text>
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />
                <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}>
                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}
export default Login;