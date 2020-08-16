/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { StyleSheet,Text, View, SafeAreaView,TextInput,TouchableOpacity ,Image, FlatList} from 'react-native';

import data from '../../data'



export default class FlatListOrnek extends Component {
  state = {
    text:'',
    contacts:data
  }
  renderContactsItem = ({item,index}) =>{
    return(
      <TouchableOpacity style={[styles.itemContainer,{backgroundColor:index % 2 === 1 ? '#f5d7b5' : '#f5e5d3'}]}>
        <Image style={styles.avatar} source={{uri:item.picture}}/> 
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.company}>{item.company}</Text>
        </View>
      </TouchableOpacity>
    )
  };


  searchFilter = text =>{
    const newData = data.filter(item=>{
      const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`
      return listItem.indexOf(text.toLowerCase()) > -1; 
    })

    this.setState({
      contacts: newData
    })
  }


  renderHeader = () =>{
    const {text} = this.state
    return(
      <View style={styles.searchContainer}>
        <TextInput value={this.text} 
        onChangeText = {text=>{
          this.setState({
            text,
          });this.searchFilter(text);
        }}
        style={styles.searchInput} 
        placeholder='Ara..'/>
      </View>
    )
  };

  render() {
    return (      
      
    <SafeAreaView>
        <FlatList 
        ListHeaderComponent={this.renderHeader()}
        renderItem={this.renderContactsItem}
        keyExtractor={(item)=>item._id}
        data={this.state.contacts}
        />
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer:{
    flex:1,
    flexDirection:"row",
    paddingVertical:10,
    borderBottomWidth:2,
    borderBottomColor:"#f7b777"
  },
  
  avatar:{
    width:60,
    height:60,
    borderRadius:30,
    marginHorizontal:10
  },
  textContainer:{
    justifyContent:"space-around",
  },
  name:{
    fontSize:20,
    fontWeight:'bold'
  },
  searchContainer:{
    backgroundColor:'#eda24c',
    padding:5
  },
  searchInput:{
    borderWidth:2,
    borderColor:'#f5cea2',
    borderRadius:25,
    textAlign:'center',
    paddingHorizontal:35,
    marginHorizontal:15
  }

});