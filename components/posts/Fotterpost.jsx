import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//icons 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Fotterpost = ({post}) => {
  return (
      <> 
      <View style={{ justifyContent:'space-between' , flexDirection:'row',alignItems:'center'}} > 
    <View style={styles.IconContent} >
     <FontAwesome name="heart-o" size={26} color="#fff" />
     <FontAwesome name="comment-o" size={26} color="#fff" /> 
     <MaterialCommunityIcons name="share-outline" size={26} color="#fff" />
    </View> 

    <View> 
    <FontAwesome5 name="bookmark" size={24} color="#fff" />
    </View>
    </View> 

    {/* likes */} 
    <View style={{ marginTop:7,flexDirection:'row' }} >
     <Text  style={{color:'#fff',fontWeight:'700'}} >{post.likes.toLocaleString()}  Likes</Text> 
    </View> 

    {/* caption */} 

    <View style={{ marginTop:7 ,flexDirection:'row'  }}  > 
      <Text>  
         <Text style={{color:'#fff' ,fontWeight:'900' }} > {post.user} </Text> 
         <Text style={{color:'#fff'  }} > {post.caption}</Text> 
        </Text>
    </View>
    </>
  )
}

export default Fotterpost  







const styles = StyleSheet.create({
    IconContent : {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'35%'
    }
})