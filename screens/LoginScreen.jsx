import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/LogIn Screeen/LoginForm'



const LoginScreen = () => (

  <View style={styles.container} >  
    <View style={styles.loginContainer} >
      <Image
        source={require('../assets/images/Instagram-Icon.png')}
        style={{width:100,height:100}}
        resizeMode='cover'
      />
    </View>
      <LoginForm/> 
  </View>
  
)

export default LoginScreen

const styles = StyleSheet.create({
  
  container : {
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:10,
    paddingTop:50
  },

  loginContainer : {  
  marginVertical:40,
  alignItems:'center',
  
  },

})