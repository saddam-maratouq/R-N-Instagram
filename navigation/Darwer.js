import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
//navigation 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NewpostScreen from '../screens/NewpostScreen';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator(); 

const Darwer = () => {
  return (
   
      <Drawer.Navigator 
      initialRouteName='Home'
      >
        <Drawer.Screen name="SignUp" component={SignUpScreen} options={{ headerShown:false}}/>
        <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown:false}}/>
        <Drawer.Screen name="Home" component={TabNav} options={{ headerShown:false}}/>
        <Drawer.Screen name="NewPost" component={NewpostScreen} options={{ headerShown:false}}/>

      </Drawer.Navigator> 
   
  )
}

export default Darwer

