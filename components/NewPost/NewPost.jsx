import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

//icon
import { AntDesign } from '@expo/vector-icons';

//navigation control
import { useNavigation } from '@react-navigation/native';
import FormikPostuploder from './FormikPostuploder';


const NewPost = () => { 

    const navigation = useNavigation();

  return (

    <View style={styles.postContainer} >  
    {/* Header */}
    <View style={styles.postContent} > 
    <TouchableOpacity 
        onPress={() => navigation.navigate('Home')  }
     > 
    <AntDesign name="arrowleft" size={28} color="#fff" /> 
    </TouchableOpacity>
      <Text style={styles.headerText}>New post</Text>
      <Text></Text>
    </View>

    {/* formik post  */} 
    <FormikPostuploder /> 

    </View>  
  )
}

export default NewPost








const styles = StyleSheet.create({
    postContainer : {
        marginTop:50,
        marginHorizontal:10
       
    },
    postContent : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    headerText : {
        color:'#fff',
        fontSize:20,
        fontWeight:'700'
    }
})