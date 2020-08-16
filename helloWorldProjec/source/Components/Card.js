import React, {Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends Component{
    render(){
        const {text,backgroundColor} = this.props
        return(
            <View style={[styles.textContainer, {backgroundColor} ]}>
                <Text style={styles.text}>{text}</Text>
            </View>
        );
    }
}

Card.propTypes ={
    text: PropTypes.st
}

const styles = StyleSheet.create({
    text: {
        fontStyle:'italic',
        color: 'black',
      },
      textContainer: {
        paddingVertical: 10,
        paddingHorizontal:15,
        borderWidth : 2.5,
        borderColor: 'black'    
      } 
})