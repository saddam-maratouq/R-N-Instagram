import { StyleSheet, Text, View, TextInput, Pressable,TouchableOpacity } from "react-native";
import React,{useState} from "react";


import { Formik } from 'formik'
import * as yup from 'yup';
import Validator  from 'email-validator' 




const LoginForm = () => {


    const LoginFormSchema = yup.object().shape({
      email : yup.string().email().required('An email is required'),
      password: yup.string().required()
      .min(8,  'your password has to have at least 8 characters')
    })
    

  


   return ( 


    <View> 

      <Formik 
        initialValues={{email: '', password: ''}} 
        //refer to function down which have handelSubmit
        onSubmit={ values => {
          console.log( 'Formik =>',values) 
        }} 
        validationSchema={LoginFormSchema} 
        validateOnMount={true} 
      >  

        {({handleChange, values , isValid, handleBlur ,handleSubmit}) => (

       <>  

      <View style={styles.InputEmail}
      
          
      >
        <TextInput
          placeholder=" Phone number, email or username"
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
      <View style={{ alignItems: "flex-end", marginTop: 15, marginRight: 5 }}>
        <Text style={{ color: "#6BB0F5", fontSize: 15 }}>
          {" "}
          Forget password?{" "}
        </Text>
      </View>

      {/* butoon */}
      <Pressable 
        style={styles.butoon(isValid)} 
        onPress={handleSubmit}
       >
          <Text style={{color:'#fff',fontSize:18,fontWeight:'500'}} >  Log  in  </Text>
      </Pressable>
       

       <View style={styles.signUpContainer} > 
       <Text style={{fontSize:18}}> Don't have an account? </Text> 
       <TouchableOpacity> 
       <Text style={{color:'#0096F6'}} > Sign up </Text>
       </TouchableOpacity>
       </View> 
        </>
        )} 
       </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  InputEmail: {
    marginTop: 70,
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
