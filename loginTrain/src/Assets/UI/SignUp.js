import React, { Component } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

export default class SignUp extends Component{
    render(){
        return(
            <TouchableOpacity style={[styles.signUpArea,styles.shadow]}>
                <Text style={styles.signUpText}>Don't you have an Account ?</Text>
                <Text style={[styles.signUpText,{fontWeight:'bold',}]}>Sign Up</Text>
            </TouchableOpacity>
        )};
}

const styles = StyleSheet.create({
    signUpArea:{
        backgroundColor:'#0065e0',
        marginHorizontal:55,
        marginBottom:75,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1.5,
        borderColor:'#aec0d6',
        borderRadius:25,
        padding:10,
    },
    shadow:{
        shadowOffset:{width:10,height:25},
        shadowColor:'black',
        shadowOpacity:250,
        shadowRadius:5,
        elevation:15,
      },
    signUpText:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'200',
        color:'white',
    }

})