import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Colecao from './src/views/Colecao/Colecao';
import Inicial from './src/views/Inicial/Inicial';
import Item from './src/views/Item/Item';
import Perfil from './src/views/Perfil/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function rotasDrawer(){
  return (
    <Drawer.Navigator initialRouteName='Inicial'>
      <Drawer.Screen 
      options={
        {cardStyle: styles.screenInicial,
        
        headerStyle: {backgroundColor: '#14417b'},
        headerTintColor: '#FFFFFF',
        
        }}
      name="Inicial" component ={rotasStack}/>
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

function rotasStack() {
  return (
    <Stack.Navigator>

       
        <Stack.Screen 
        name="Inicial" 
        component={Inicial}
        options={
          {cardStyle: styles.screenInicial,
          headerShown: false,
          
          }
        }
      />
        <Stack.Screen 
        name="Colecao"
        component={Colecao}
        options={
          { cardStyle: styles.screenColecao,
            headerShown: false,
          }
        }
      />
        <Stack.Screen 
        name="Item"
        component={Item}
        options={
          { cardStyle: styles.screenItem,
            headerShown: false,
          }
        }
      />

    </Stack.Navigator>
    )
}
export default function App(){
  return(
    <NavigationContainer>

      <Tab.Navigator
        barStyle = {{backgroundColor :'#14417b'}}
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

    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    screenInicial: {
      backgroundColor: "#92afd7"
    },
    screenColecao: {
      backgroundColor: "#d0f4ea"
    },
    screenItem: {
      backgroundColor: "#d1d1d1"
    },
});
