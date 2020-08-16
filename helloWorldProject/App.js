/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from './node_modules/react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import FlatListOrnek from "./src/Components/FlatListOrnek";

export default class App extends Component {
  render() {
    return (
      <View>  
        <FlatListOrnek/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
