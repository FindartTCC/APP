import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
    return(

        <Tab.Navigator
        tabBarOptions={
          {
            style: {backgroundColor: '#14417b'},
            labelStyle: {fontSize: 24},
            activeTintColor: '#14417b', 
          }}
       >
        <Tab.Screen 
        options ={{
          headerShown: false,
          
        }}
        name="Inicial" component={rotasDrawer}/>
        <Tab.Screen
         options ={{
          headerShown: false,
        }}
        name="Perfil" component={Perfil}/>
      </Tab.Navigator>


    );
}

export default RotasTab;