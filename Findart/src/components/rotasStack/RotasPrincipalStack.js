import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Inicial from '../../views/Inicial/Inicial';
import Explorar from '../../views/Explorar/Explorar';
import Sobre from '../../views/Sobre/Sobre';
import estiloRotasStack from './estiloRotasStack';
const Stack = createStackNavigator ();
const RotasPrincipalStack = () => {
    return (
        <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen 
        name="Inicial" component={Inicial} 
        options={{cardStyle: estiloRotasStack.screenInicial,
          headerShown: false,
          }} />
        <Stack.Screen 
        name="Explorar" component={Explorar}
        options={
          { cardStyle: estiloRotasStack.screenExplorar,
            headerShown: false,
          }} />
        <Stack.Screen 
        name="Sobre" component={Sobre}
        options={
          { cardStyle: estiloRotasStack.screenSobre,
            headerShown: false,
          }} />
    </Stack.Navigator>
    );}
export default RotasPrincipalStack;