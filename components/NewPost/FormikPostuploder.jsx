import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

import * as yup from 'yup'
import { Formik } from 'formik'


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


  const Navigationhandler = () => {
    setTimeout(() => {
      navigation.navigate('Home') 
    }, 2000);
  }

  return (
   <Formik
    initialValues={{imageUrl:'',caption:''}} 
    validationSchema={postSchema}
    onSubmit={(values) => {
      console.log('values',values)
      Navigationhandler()
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

