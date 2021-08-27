import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Perfil from '../../views/Perfil/Perfil';
import Explorar from '../../views/Explorar/Explorar';
import Sobre from '../../views/Sobre/Sobre';
import logo from "../../imgs/logo.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Fontisto';
import RotasPrincipalStack from '../rotasStack/RotasPrincipalStack';
const Drawer = createDrawerNavigator();
const RotasDrawer = () => {
    return (
        
        <Drawer.Navigator initialRouteName='Findart'>
            
        <Drawer.Screen options={{
              title: 'Findart',
              headerStyle: {
                backgroundColor: '#A61F2B',
              },
              
              headerTintColor: '#F2A74B', //LETRA E SIMBOLO
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerStyle: {
                backgroundColor: '#A61F2B', //backgroud color da tela drawer
              },
              drawerActiveTintColor: '#F2A74B', //letras dos itens do drawer
              drawerInactiveTintColor: '#F2A74B',
              drawerIcon: ({color, size}) => (
                <Icon name="home" size={size} color={color} />
              )
            }}
        
        name="Inicial" component ={RotasPrincipalStack}/>
        <Drawer.Screen
        options={{
            title: 'Explorar',
            headerStyle: {
                backgroundColor: '#A61F2B',
              },
            
            headerTintColor: '#F2A74B', //LETRA E SIMBOLO
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerStyle: {
              backgroundColor: '#A61F2B', //backgroud color da tela drawer
            },
            drawerActiveTintColor: '#F2A74B', //letras dos itens do drawer
            drawerInactiveTintColor: '#F2A74B',
            drawerIcon: ({color, size}) => (
                <IconF name="world-o" size={size} color={color} />
              )
          }}
        name="Explorar" component ={Explorar}/>
        <Drawer.Screen options={{
              title: 'Sobre',
              headerStyle: {
                backgroundColor: '#A61F2B',
              },
              
              headerTintColor: '#F2A74B', //LETRA E SIMBOLO
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerStyle: {
                backgroundColor: '#A61F2B', //backgroud color da tela drawer
              },
              drawerActiveTintColor: '#F2A74B', //letras dos itens do drawer
              drawerInactiveTintColor: '#F2A74B',
              drawerIcon: ({color, size}) => (
                <Icon name="exclamation-circle" size={size} color={color} />
              )
            }}
        name="Sobre" component ={Sobre}/>
        <Drawer.Screen options={{
              title: 'Perfil',
              headerStyle: {
                backgroundColor: '#A61F2B',
              },
              
              headerTintColor: '#F2A74B', //LETRA E SIMBOLO
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerStyle: {
                backgroundColor: '#A61F2B', //backgroud color da tela drawer
              },
              drawerActiveTintColor: '#F2A74B', //letras dos itens do drawer
              drawerInactiveTintColor: '#F2A74B',
              drawerIcon: ({color, size}) => (
                <Icon name="user" size={size} color={color} />
              )
            }}
        name="Perfil" component ={Perfil}/>
        </Drawer.Navigator>
);}
export default RotasDrawer;