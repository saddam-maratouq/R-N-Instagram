import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icon 
import { FontAwesome5 } from '@expo/vector-icons';

//components
import Search from '../components/TabNav/Search';
import Likes from '../components/TabNav/Likes';
import HomeScreen from '../screens/HomeScreen';
import NewpostScreen from '../screens/NewpostScreen';
import Profile from '../components/TabNav/Profile';

const Tab = createBottomTabNavigator();

const TabNav = () => 


(
    <Tab.Navigator
    screenOptions={({ route }) => ({
   tabBarIcon: ({ focused, color, size }) => { 
       let Icons; 

       if (route.name === 'Home2') {
           Icons = 'home' 
          size = focused ? 30 : 25 
        
       }
           
        else if (route.name === 'Search') { 
           Icons =  'search'  
          size = focused ? 30 : 25 
         
       }

       else if (route.name === 'NewPost') { 
           Icons =  'plus-circle'  
          size = focused ? 30 : 25 
         //  color = focused ? '#f0f' : '#555'
       }

       else if (route.name === 'Likes') { 
           Icons =  'heart'  
          size = focused ? 30 : 25 
         //  color = focused ? '#f0f' : '#555'
       }

       else if (route.name === 'profile') { 
           Icons =  'user-alt'  
          size = focused ? 30 : 25 
         //  color = focused ? '#f0f' : '#555'
       }

      
       return <FontAwesome5 name={Icons} size={size} color={color} />  
     
     },
     //another way to control color with more options ...
     tabBarActiveTintColor: '#fff',
     tabBarInactiveTintColor: 'gray', 
     tabBarStyle: { backgroundColor: 'black' }, 
     tabBarLabelStyle:{ fontSize:16 , fontWeight:'bold' ,marginLeft:10 } ,
     tabBarShowLabel:false,
     headerShown:false, 
   })}  

   >
     {/* <Tab.Screen name="Main" component={Main} />  */}
     <Tab.Screen name="Home2" component={HomeScreen} /> 
     <Tab.Screen name="Search" component={Search} /> 
     <Tab.Screen name="NewPost" component={NewpostScreen} />  
     <Tab.Screen name="Likes" component={Likes} />  
     <Tab.Screen name="profile" component={Profile} />  


     


     {/* <Tab.Screen name="Cart" component={Cart} options={{
          tabBarBadge: length  ,  tabBarBadgeStyle : { backgroundColor:'#F66B0E'}
     }} /> */}

   </Tab.Navigator> 
)
 


export default TabNav

const styles = StyleSheet.create({})