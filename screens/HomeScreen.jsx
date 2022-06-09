import { StyleSheet, Text, View,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import { userposts } from '../Data/posts'

const HomeScreen = () => {
  return (
   
    <View style={styles.Container } >
    <View style={styles.headerContainer} > 
    <Header/>
     <Stories/> 
    <ScrollView> 
     { userposts.map(( post,index ) => (
        <Posts  post={post}   key={index}/>
     )) } 
    </ScrollView> 
    
    </View>
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 
  Container : {
    flex:1,
    backgroundColor:'black',
  }, 
  headerContainer : {
    marginHorizontal:20 ,
    marginTop:30,
   
  }
})