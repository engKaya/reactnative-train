import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, KeyboardAvoidingView } from 'react-native';

import TextInputO from '../Assets/UI/TextInputO'
import MyButton from '../Assets/UI/MyButton';

export default class LoginPage extends Component{
  render() {
  return (
    <View>
        <Text style={styles.signInText}>Sign In</Text>
        <TextInputO placeholder='Username'
         returnKeyType={"next"}
         onSubmitEditing={()=>this.passwordInput.focus()}
         />
        
        <TextInputO 
        placeholder='Password' 
        secureTextEntry={true}
        inputRef={input=>this.passwordInput= input}
        />

        <MyButton 
        bgColor={"#0065e0"}
        text={"Sign In"}
        />


    </View>
  )};
}

const styles = StyleSheet.create({
    signInText:{
        marginVertical:10,
        fontSize:16,
        color:'#333',
        fontWeight:"bold"
    }

})

