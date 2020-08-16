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
import PlatformOrnek from './src/Components/PlatformOrnek'

export default class App extends Component {
  render() {
    return (
        <PlatformOrnek/>
    );
  }
}

const styles = StyleSheet.create({
  
});
