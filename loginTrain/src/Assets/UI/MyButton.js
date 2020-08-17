import React, { Component } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

export default class MyButton extends Component{
  
  render() {
    const {bgColor} = this.props
      return(
        <View>
         <TouchableOpacity style={[styles.myButtonStyle,{backgroundColor:bgColor}]}>
             <Text style={styles.signInStyle}>{this.props.text}</Text>
         </TouchableOpacity>
        </View>
      )
  }}

  MyButton.propTypes = {
      text: PropTypes.string.isRequired,
      bgColor : PropTypes.string,
  }

  const styles = StyleSheet.create({
    myButtonStyle:{
        borderColor:'#004aa3',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        padding:12.5,
        marginRight:35,
        marginVertical:15,
        marginBottom:25,
        borderRadius:20,
    },
    signInStyle:{
      color:'white',
      fontWeight:'bold',
      fontSize:16
    }
  })