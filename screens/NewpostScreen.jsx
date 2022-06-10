import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewPost from '../components/NewPost/NewPost'

const NewpostScreen = () => {
  return (

    <View style={{ flex:1 ,backgroundColor:'black' }} >
     <NewPost/> 
    </View>
  )
}

export default NewpostScreen

const styles = StyleSheet.create({})