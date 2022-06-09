import { StyleSheet, Text, View , Image,Dimensions} from 'react-native'
import React from 'react'

const height = Dimensions.get('screen').height ;

const width = Dimensions.get('screen').width ;

const BoudyPost = ({post}) => {

    const {  imageUrl  } = post;
  return (
    <View style={styles.boudy} >
     <Image
        source={{uri:imageUrl}}
        style={{height:'100%' , resizeMode:'cover'}} 
       />
    </View>
  )
}

export default BoudyPost

const styles = StyleSheet.create({ 
   boudy : {
       width:'100%',
         height:450,
       marginTop:10
   }
})