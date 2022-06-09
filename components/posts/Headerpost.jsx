import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Headerpost = ({post}) => {
  
    const {profile_picture,user} = post; 


  return (
   
    <View style={{margin:5,justifyContent:'space-between',flexDirection:'row',alignItems:'center' }} >
     <View style={{ flexDirection:'row' , alignItems:'center'}} > 
    <Image 
    source={{uri:profile_picture}}  
    style={{width:35,height:35,borderRadius:25}} 
    />
    <Text  style={{color:'#fff' , fontWeight:'700',marginLeft:5}} > {user} </Text>
     </View> 
    
     <Text  style={{color:'#fff' , fontSize:17 , fontWeight:'900'}} >...</Text>
     
    </View>
   
  )
}

export default Headerpost

const styles = StyleSheet.create({})