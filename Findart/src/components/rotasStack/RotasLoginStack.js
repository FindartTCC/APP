import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../views/Login/Login';
import RotasTab from '../rotasTab/RotasTab';
import estiloRotasStack from './estiloRotasStack';

const Stack = createStackNavigator();

const RotasLoginStack = () => {
    return (

        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
        name="login"
        component={Login}
        options={
          {
            cardStyle: estiloRotasStack.screenLogin,
            headerShown: false,
          }
        }
        />
        <Stack.Screen
        name="Inicial"
        component={rotasTab}
        options={
          {
            cardStyle: estiloRotasStack.screenItem,
            headerShown: false,
          }
        }
        />
      </Stack.Navigator>

    );
}
export default RotasLoginStack;
