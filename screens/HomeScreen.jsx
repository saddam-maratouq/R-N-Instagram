import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'


const HomeScreen = () => {
  return (
    <View style={styles.headerContainer } >
     <Header/>  
     <Stories/> 
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 
  headerContainer : {
    marginTop:30,
    marginHorizontal:20 
 }
})