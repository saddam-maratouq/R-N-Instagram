import { StyleSheet, Text, View,Dimensions,ScrollView} from 'react-native'
import React from 'react'
import Headerpost from '../posts/Headerpost';
import BoudyPost from '../posts/BoudyPost';
import Fotterpost from '../posts/Fotterpost';


const width = Dimensions.get('screen').width ;

const Posts = ({post}) => {
  return (
  
    <View style={{marginTop:10}}>
      
    <View style=
    {{ width:width, 
     borderWidth:0.5,
     borderColor:'#fff',
     marginBottom:10, 
      }} > 
     </View>   
    
    <Headerpost post={post} /> 

    <BoudyPost  post={post} /> 
     
     <View style={{ marginTop:10,marginHorizontal:15}} > 
    <Fotterpost  post={post} />
    </View>

   
    </View>
  )
} 

export default Posts 

const styles = StyleSheet.create({})