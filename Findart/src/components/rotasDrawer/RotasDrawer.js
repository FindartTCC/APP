import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import RotasPrincipalStack from '../rotasStack/RotasPrincipalStack';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {

    return (

        <Drawer.Navigator initialRouteName='Inicial'>
        <Drawer.Screen 
        options={
          {cardStyle: styles.screenInicial,
          
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
          
          }}
        name="Inicial" component ={RotasPrincipalStack}/>
        <Drawer.Screen
        options={
          {cardStyle: styles.screenInicial,
          
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
          
          }}
        name="Colecao" component ={Colecao}/>
        <Drawer.Screen
        options={
          {cardStyle: styles.screenInicial,
          
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
          
          }}
        name="Item" component ={Item}/>
        <Drawer.Screen
        options={
          {cardStyle: styles.screenInicial,
          
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
          
          }}
        name="Perfil" component ={Perfil}/>
        
      </Drawer.Navigator>

    );
}

export default RotasDrawer;