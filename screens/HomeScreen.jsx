import { StyleSheet, Text, View,SafeAreaView,ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import { userposts } from '../Data/posts'
import {db} from '../firebase'

const HomeScreen = () => {

   const [posts, setPosts] = useState([]) 


  useEffect(() => {
    
    db.collectionGroup('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data())) 
    })

  }, []) 
  
  

  return (
   
    <View style={styles.Container } >
    <View style={styles.headerContainer} > 
    <Header/>
     <Stories/> 
    <ScrollView> 
     { posts.map(( post,index ) => (
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