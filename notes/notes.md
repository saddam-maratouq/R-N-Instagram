## Day one

 **why black screen gone when add Darwer which home screen inside it** ...  ???

 **answer** => 
  cuz you have to wrap screen by container first the another View ... 

what you learn ?? 




--- 

## Day two 

what you learn ??  

1 -  <TextInput 
          placeholder=' Phone number, email or username' or password
          placeholderTextColor={'gray'}

          keyboardType='email-address password ...'
          textContentType='emailAddress' 
          ** autoFocus={true} 
          autoCorrect={false} **
          textContentType='password'
        />

    

--

## login form / sign up form 

 -- blueish color : #6BB0F5  / #0096F6  ... 


2 - learn Formik / yup / email Validator   


- learn how to code yup with formik to make schema 

- is valied to control style for exampel its built in from formik function => 

   {({handleChange, values , isValid, handleBlur ,handleSubmit}) => primary function


- make style as ternery style by .length or validation.validate require email ... 

- valied its like a condtion valied => email password rule if its do style etc ... 
 
- if not valied you cant acsses  remember accses to the => 
 
 (login sign up butoon ) 

--


## Day 3 

<!-- the error  -->
Metro has encountered an error: While trying to resolve module 'firebase' ? 

the problem in consensus  between expo and firebase version 

solution : =>  npm i firebase@9.7.0  ..... 

also mapy make firebase in a root ... 


  what you learn ??   

  **dont forget to follow new firbase instrocter in main firebase folder** => 

import firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore(); 

....etc 


**to make data base work on firebase cloud dont forget change rules** => 

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
       allow read, write: if request.auth != null;
    }
  }
}


  


