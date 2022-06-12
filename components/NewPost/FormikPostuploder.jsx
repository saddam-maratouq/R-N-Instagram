import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'

import React,{useState,useEffect} from 'react'

import * as yup from 'yup'
import { Formik } from 'formik'

import {db,firebase} from '../../firebase' 


import { useNavigation } from '@react-navigation/native'

const placeImage = 'https://banksiafdn.com/wp-content/uploads/2019/10/placeholde-image.jpg'


//schema for formik 
const postSchema = yup.object().shape({
  imageUrl : yup.string().url().required('A Url is required'), 
  caption : yup.string().max(2200,'caption is too long'),
})


const FormikPostuploder = () => {

  const [holderImage, SetHolderImage] = useState(placeImage) 

  const navigation = useNavigation() 

  const [logeedInUser, setLogeedInUser] = useState(null) 


  const getUsername = () => {
    const user = firebase.auth().currentUser
    console.log('user =>',user.uid)
    const unSubscribe = db.collection('users').where('owner_uid','==',user.uid)
    .limit(1).onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        setLogeedInUser({
          userName : doc.data().userName, // check
          profilePicture : doc.data().photo, // check nameing 
        })
      }) 
    })
    
   return unSubscribe  
  }

  

  useEffect(() => { 
    getUsername();
  }, [])

  const uploadPostFirebase = async (imageUrl,caption) => {
    const user = firebase.auth().currentUser.email 
    const newPost = db.collection('users').doc(user).collection('posts').add({
      imageUrl,
      caption,
      createdAt : new Date(),
      owner_uid : firebase.auth().currentUser.uid,
      userName : logeedInUser.userName,
      profile_picture : await logeedInUser.profilePicture,
      likes:0,
      likes_by_users: [],
      Comments : [],
    })
      .then( () =>
      setTimeout(() => {
        navigation.navigate('Home') 
      }, 2000)); 
    return newPost 
  }
  


  // const Navigationhandler = () => {
  //   setTimeout(() => {
  //     navigation.navigate('Home') 
  //   }, 2000);
  // }

  return (
   <Formik
    initialValues={{imageUrl:'',caption:''}} 
    validationSchema={postSchema}
    onSubmit={(values) => {
      uploadPostFirebase(values.imageUrl,values.caption)
     
    }}

    validateOnMount={true} 
   > 

    {({handleChange,handleBlur,handleSubmit,values,errors,isValid}) => (
      <>
        <View style={styles.captionContent} > 
        <Image 
          source={{uri:holderImage ? holderImage : placeImage}} 
          style={{width:120,height:120}}
        />
        {/* caption Input */}
        <TextInput
        placeholder='what are you thinking ?'
        placeholderTextColor={'gray'}
        style={{ fontSize:18 ,color:'#fff',marginHorizontal:10}} 
        multiline={true}
        onChangeText={handleChange('caption')}
        onBlur={handleBlur('caption')}
        value={values.caption}

        />
        
        </View>  

        {/* Line */}
        <View style={styles.Line} >
        </View>  


        {/* ImageUrl Input*/}
        <TextInput
        onChange={ e => SetHolderImage(e.nativeEvent.text)}  
        placeholder=' Enter image url'
        placeholderTextColor={'gray'}
        style={{ fontSize:15 ,color:'#fff'}} 
        onChangeText={handleChange('imageUrl')}
        onBlur={handleBlur('imageUrl')}
        value={values.imageUrl} 
        />

          {/*Errors*/}
        {errors.imageUrl && (
          <Text style={{color:'red'}} >{errors.imageUrl}</Text> 
        )}

        {/* Butoon */}
        <TouchableOpacity 
          disabled={!isValid}
          style={styles.butoon(isValid)}
          onPress={ handleSubmit }
         > 
          <Text style={{color:'#fff' ,fontSize:18}}>  Share </Text>
        </TouchableOpacity> 

      </>
    )} 
   </Formik>
  ) 
}

export default FormikPostuploder

const styles = StyleSheet.create({
  captionContent : {
    flexDirection:'row',
    margin:20,
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  Line : {
    borderWidth:0.3,
    borderColor:'#fff',
  },

  butoon : isValid => (
   
  {
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:  isValid ? 'gray' : '#ccc', 
   margin:50,
   padding:10,
   borderRadius:5,
  }) 
})

