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
            style: {backgroundColor: '#A61F2B'},
            labelStyle: {fontSize: 24},
            activeTintColor: '#A61F2B', 
          }}
       >
        <Tab.Screen 
        options ={{
          headerShown: false,
          
        }}
        name="Inicial" component={RotasDrawer}/>
        <Tab.Screen
         options ={{
          headerShown: false,
        }}
        name="Perfil" component={Perfil}/>
      </Tab.Navigator>


    );
}

export default RotasTab;