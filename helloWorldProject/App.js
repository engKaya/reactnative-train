/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from './node_modules/react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import axios from 'axios'


import FlatListOrnek from "./src/Components/FlatListOrnek";
import PlatformOrnek from './src/Components/PlatformOrnek'

export default class App extends Component {
  state={
    name:'',
    surname:'',
    loading:true
   };
 componentDidMount(){
     axios
          .get('https://randomuser.me/api/')
          .then(user => user.data.results[0])
          .then(user => {
            this.setState({
              name : user.name.first,
              surname:user.name.last,
              loading:false
            })
          })
   }
  render() {
    const {name,surname,loading} = this.state    
    return (
      <View>
        asfasdasd
      </View>
    );
  }
}
//{ loading ? <Text>Loading..</Text>:<Text>{name} {surname}</Text>}  
const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    flex:1,
    alignContent:'center'
  }
});
