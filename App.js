import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Darwer from './navigation/Darwer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
  
     <NavigationContainer style={styles.container} >
    <Darwer/>
      <StatusBar style="auto" /> 
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
