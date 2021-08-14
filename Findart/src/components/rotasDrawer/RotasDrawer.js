import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import Sobre from '../../views/Sobre/Sobre';
import RotasPrincipalStack from '../rotasStack/RotasPrincipalStack';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {

    return (

        <Drawer.Navigator initialRouteName='Inicial'>
        <Drawer.Screen 
        options={
          {
          headerStyle: {backgroundColor: '#F2A74B'},
          headerTintColor: '#420000',
          
          }}
        name="Inicial" component ={RotasPrincipalStack}/>
        <Drawer.Screen
        options={
          {
          headerStyle: {backgroundColor: '#F2A74B'},
          headerTintColor: '#420000',
          
          }}
        name="Colecao" component ={Colecao}/>
        <Drawer.Screen
        options={
          {
          headerStyle: {backgroundColor: '#F2A74B'},
          headerTintColor: '#420000',
            
          }}
        name="Sobre" component ={Sobre}/>
        <Drawer.Screen
        options={
          {
          headerStyle: {backgroundColor: '#F2A74B'},
          headerTintColor: '#420000',
          
          }}
        name="Perfil" component ={Perfil}/>
        
      </Drawer.Navigator>

    );
}

export default RotasDrawer;