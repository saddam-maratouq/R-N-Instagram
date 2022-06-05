import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/SignUp Screen/SignupForm'





const SignUpScreen = () => (
   
    <View style={styles.container} >  
    <View style={styles.SignUpContainer} >
      <Image
        source={require('../assets/images/Instagram-Icon.png')}
        style={{width:100,height:100}}
        resizeMode='cover'
      />
    </View>
      <SignupForm />  
  </View>
  )


export default SignUpScreen

const styles = StyleSheet.create({

    container : {
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingTop:50
      },
    
      SignUpContainer : {  
      marginVertical:40,
      alignItems:'center',
      
      },
})