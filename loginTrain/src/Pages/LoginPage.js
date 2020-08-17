
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,KeyboardAvoidingView } from 'react-native';

import LoginForm from '../Components/LoginForm'
import SignUp from '../Assets/UI/SignUp'

export default class LoginPage extends Component{
  render() {
  return (  
   
    <View style={styles.container}>
       <KeyboardAvoidingView behavior={'position'}>
        <View style={styles.headBackground}/>
      
        <View>
          <Text style={styles.logo}>UDAC</Text>
          <Text style={styles.logoDesc}>Property & Tax Survey</Text>
        </View>
        <ScrollView>
          <View style={[styles.loginArea,styles.shadow]}>
            <Text style={styles.loginHeader}>Property Tax Server</Text>
            <Text style={styles.loginAreaDesc}>Unique Door No Easily Fill Your Entire Property Tax Using App</Text>
            <LoginForm/>
          </View>
          
          <SignUp/>

        </ScrollView>
        
    </KeyboardAvoidingView>
    </View>
  );}
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:65,
    backgroundColor:'#F5FCFF' 
  },  
  headBackground:{
    top:-1100,
    left:-850,
    backgroundColor:'#1572de',
    height:1500,
    borderRadius:750,
    width:1500,
    position:'absolute'
  },
  logo:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#f2f2f2'
  },
  loginHeader:{
    fontSize:28,
    fontWeight:'bold',
  },
  loginAreaDesc:{
    fontSize:16,
    color:'#7e868f',
    marginVertical:5
  },
  logoDesc:{
    textAlign:'center',
    color:'#f2f2f2'
  },
  shadow:{
    shadowOffset:{width:10,height:25},
    shadowColor:'black',
    shadowOpacity:100,
    shadowRadius:5,
    elevation:8,
  },

  loginArea:{
    backgroundColor:'#edf1f5',
    marginHorizontal:50,
    marginVertical:15,
    paddingTop:40,
    paddingLeft:30,
    borderRadius:25,    
  }

});