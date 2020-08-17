import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,ScrollView } from 'react-native';

export default class LoginPage extends Component{
    state = {
    text: ''
    };
    render(){
        return(
            <View>
                <TextInput
                  style={styles.textInputStyle}
                  {...this.props}
                  value={this.state.text}
                  ref={this.props.inputRef}
                  placeholderTextColor='#2574f5'                
                  onChangeText={text => this.setState({
                      text,
                  })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInputStyle:{
     borderWidth:1,
     borderColor:'#2574f5',
     marginRight:30,
     color:'#2574f5',
     paddingLeft:15,
     borderTopLeftRadius:25,
     borderBottomLeftRadius:25,
     borderTopRightRadius:50,
     borderBottomRightRadius:50,
     marginBottom:10,
    }
})