import React, {Component} from 'react'
import {StyleSheet, Text, View, Platform} from 'react-native';

export default class PlatformOrnek extends Component {
    render(){
        const headerStyle = Platform.select({
            ios: styles.IOSHeader,
            android: styles.ANDROIDHeader
        })
        return(
            <View style={[styles.container,headerStyle]}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    IOSHeader:{
        backgroundColor:'gray'
    },
    ANDROIDHeader:{
        backgroundColor:'#fcb481'
    }

})