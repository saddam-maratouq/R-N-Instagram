import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
//navigation 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Drawer = createDrawerNavigator(); 

const Darwer = () => {
  return (
   
      <Drawer.Navigator 
      initialRouteName='SignUp'
      >
        <Drawer.Screen name="SignUp" component={SignUpScreen} options={{ headerShown:false}}/>
        <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown:false}}/>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>

      </Drawer.Navigator> 
   
  )
}

export default Darwer

