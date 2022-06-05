import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'


const HomeScreen = () => {
  return (
    <View style={styles.Container } >
    <View style={styles.headerContainer} > 
     <Header/>  
     <Stories/> 
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