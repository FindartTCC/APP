import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer';
const Tab = createBottomTabNavigator();
const RotasTab = () => {
    return(
        <Tab.Navigator
        tabBarOptions ={{
          activeTintColor: '',
          
          labelStyle: {
            fontSize: 0,
            
          },
          
        }}
       >
        
      </Tab.Navigator>
    );
}
export default RotasTab;