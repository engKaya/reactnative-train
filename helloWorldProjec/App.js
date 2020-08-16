/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView,} from 'react-native';
import FlatListE from './source/Components/FlatListE';

export default class App extends Component {
 

  render() {
    return (      
      
    <SafeAreaView>
      <FlatListE/>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
});