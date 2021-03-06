import { StyleSheet,
   Text, 
   View, 
   TextInput,
   Pressable,
   TouchableOpacity ,
   Alert
  } 
   from 
   "react-native";
import React,{useState,useEffect} from "react";

// SignupForm 
import { Formik } from 'formik'
import * as yup from 'yup';
import Validator  from 'email-validator' 

//navigation
import {useNavigation } from '@react-navigation/native';


import {firebase,db} from "../../firebase";



const SignupForm = () => { 

  const navigation = useNavigation();
  
  // to handle formik 
    const LoginFormSchema = yup.object().shape({
      email : yup.string().email().required('An email is required'),
      password: yup.string().required()
      .min(8,  'your password has to have at least 8 characters'),
      userName : yup.string().required()
      .min(2,' your name At least 2 characters') 
    })
    
     //Random users pictuer 
    const getRandomPicture = async () => {
      const response = await fetch('https://randomuser.me/api') 
      const picture = await response.json() 
      return picture.results[0].picture.large  

    }

   
    

    // creat new user in firebase 
    const onSignUp = async (email,password,userName) => {
  
      try {

      const authUser =   await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(' created new user succsses from fireBase =>',email,password)
        navigation.navigate('Home') 

        db.collection('users').doc(authUser.user.email) // to change id username to email in firebase 
         .set({
          owner_uid : authUser.user.uid,
          userName , 
          password: password,
          email:authUser.user.email,
          photo : await getRandomPicture() , 
        })
      }

      catch(error) {
          Alert.alert(error.message)  
      }

    }



    


  return ( 


    <View> 

      <Formik 
        initialValues={{email: '', password: '',userName:''}} 
        //refer to function down which have handelSubmit
        onSubmit={ values => {
          onSignUp(values.email,values.password,values.userName) 
        }} 
        validationSchema={LoginFormSchema} 
        validateOnMount={true} 
      >  

        {({handleChange, values , isValid, handleBlur ,handleSubmit}) => (

       <>  

      <View style={styles.InputEmail}
      
          
      >
        {/* Email Input */}
        <TextInput
          placeholder=" Phone number, email "
          placeholderTextColor={"gray"}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          // autoFocus={true}
          onChangeText={handleChange('email')}  
          onBlur={handleBlur('id')}
          value={values.email}  
          style={[styles.Input , {
            borderColor : values.email.length < 1  ||
             Validator.validate(values.email)  ? 
            '#ccc' : 'red' 
          }]}
        />
      </View> 

      <View style={styles.InputPassword}>
          {/* userName Input */}
        <TextInput
          placeholder="user name "
          placeholderTextColor={"gray"}
          keyboardType="default"
          autoCorrect={false} 
        //   textContentType='name' 
          onChangeText={handleChange('userName')} 
          onBlur={handleBlur('id')}
          value={values.userName} 
          style={[styles.Input , { 
            borderColor :   values.userName.length < 1  || values.userName.length >= 2   ?
            '#ccc' : 'red' 
          }]}
        />
      </View>
          {/* password Input */}
      <View style={styles.InputPassword}>
        <TextInput
          placeholder="password"
          placeholderTextColor={"gray"}
          keyboardType="default"
          secureTextEntry={true} 
          autoCorrect={false}
          textContentType="password" 
          onChangeText={handleChange('password')} 
          onBlur={handleBlur('id')}
          value={values.password} 
          style={[styles.Input , { 
            borderColor :   values.password.length < 1  || values.password.length >= 8   ?
            '#ccc' : 'red' 
          }]}
        />
      </View>

      {/* butoon */}
      <Pressable 
        style={styles.butoon(isValid)} 
        onPress={handleSubmit}
       >
          <Text style={{color:'#fff',fontSize:18,fontWeight:'500'}} >  Sign Up   </Text>
      </Pressable>
       

       <View style={styles.signUpContainer} > 
       <Text style={{fontSize:18}}> Already  have an account ? </Text> 
       <TouchableOpacity 
       onPress={()=> navigation.navigate('Login')} 
       > 
       <Text style={{color:'#0096F6'}} > Log in  </Text>
       </TouchableOpacity>
       </View> 
        </>
        )} 
       </Formik> 
    </View>
  );
};

export default SignupForm; 

const styles = StyleSheet.create({
  InputEmail: {
    marginTop: 10,
    width: "100%",
  },

  InputPassword: {
    width: "100%",
    marginTop: 20,
  },

  Input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: "gray",
    fontSize: 18,
  },

  butoon : isValid => (

   {
      backgroundColor: isValid ?   '#0096F6' : '#6BB0F5', 
      alignItems:'center',
      marginTop:30,
      padding:12,
      borderRadius:5,
      justifyContent:'center',
  }), 
  signUpContainer : {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
      width:'100%'
  }
});
