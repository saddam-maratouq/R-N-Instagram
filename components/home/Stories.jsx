import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { storiesData } from "../../Data/storiesData";

const Stories = () => {
  

  return (
    <View style={{ marginTop:20 }} >
      <ScrollView  
        horizontal showsHorizontalScrollIndicator={false} 
       >
        {storiesData.map((story, index) => (
          
          <View style={styles.StoryContent}  key={index} >
          <Image 
              source={{uri: story.image }}
           style={styles.userImage} 
          /> 
          <Text 
          style={{ 
            color: "#fff" ,
            fontWeight:'500',
            paddingTop:4,
            
           }}> {story.userName} </Text>
          </View>
          
        ))}
      </ScrollView> 
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
 
    StoryContent : {
        justifyContent:'center',
        alignItems:'center'
    } , 
    userImage : {
        width:70 ,
        height:70 , 
        borderRadius:35 , 
        marginHorizontal:8.5  ,
    },
  
  })