import React, {Component} from 'react'
import {View,StyleSheet,Text,FlatList, Image, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'  

import data from '../data'

export default class MyFlatList extends Component{
    state ={
        contacts:data,
        text:''
    }
    searchFilter = text =>{
        const newData = data.filter(item=>{
          const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`
          return listItem.indexOf(text.toLowerCase())>-1;
    })
    this.setState({
        contacts:newData
    })
}

    searchInput =()=>{
        const {text} = this.state
        return(
            <View style={styles.searchContainer}>
                <TextInput 
                value={text}
                style={styles.searchInput} 
                onChangeText={text=>{this.setState({text});this.searchFilter(text)}}
                placeholder='Ara...'
                />
            </View>
        )
    }

    renderContactItems = ({item,index}) => {
        return(
        <TouchableOpacity style={[styles.contactContainer,{backgroundColor: index % 2 === 1 ? '#AE847E':'#DAA89B'}]}>
            <Image style={styles.avatar} source={{uri:item.picture}}/>
            <View style={styles.textContainer}>
               <Text style={styles.nameText}>{item.name}</Text>
               <Text style={styles.companyText}>{item.company}</Text>
            </View>
        </TouchableOpacity>
        )
    }

    render(){
        return(
            <SafeAreaView>
                <FlatList
                ListHeaderComponent={this.searchInput()}
                renderItem={this.renderContactItems}
                data={this.state.contacts}
                keyExtractor={(item)=>item._id}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    contactContainer:{
        paddingLeft:10,
        paddingBottom:5,
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:'#690375'
    },
    textContainer:{
      justifyContent:'center',

    },
    searchInput:{
        borderWidth:2,
        borderColor:'#AA489F',
        borderRadius:25,
        textAlign:'left',
        paddingHorizontal:35,
        marginHorizontal:15
      },
      searchContainer:{
        backgroundColor:'#AE847E',
        padding:5
      },
        companyText:{
        fontSize:16,
        fontWeight:'700',
        textAlign:'left',
        color:'#690375'
    },
    nameText:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'700',
        textAlign:'center',
        color:'#2C0E37'
    },
    avatar:{
        width:75,
        height:75,
        marginVertical:7.5,
        marginLeft:5,
        marginRight:25,
        borderRadius:35
    },
})