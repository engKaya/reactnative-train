
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView
} from 'react-native';

import Flatlist from './src/components/Flatlist';
import RandomUser from './src/components/RandomUser';

import axios from 'axios';

export default class App extends Component {


  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
          <Flatlist/>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: '#ffbebe',
    flex:1}
});
