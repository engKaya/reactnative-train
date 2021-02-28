import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, TouchableHighlight, SafeAreaView} from 'react-native';
import data from '../../data'

import axios from 'axios'

export default class Flatlist extends Component {
    state={
        backgroundColorOdd: '#ff9292',
        backgroundColorEven: '#ff6e6e',
        contacts:null,
        contactsMain:null
    }

    componentDidMount() {
        this.getContacts()
    }

    getContacts = async () => {
        const {data:{results}} = await axios.get('https://randomuser.me/api/?results=30')
        this.setState({
            contactsMain: results,
            contacts: results,
        });
    }


    searchInContacts = (text) => {
        const newContacts = this.state.contactsMain.filter(item => {
            const info = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`
            return info.indexOf(text.toLowerCase())>-1
        })

        this.setState({
            contacts: newContacts,
        });

    }


    searchComponent = () => {
        return(
            <View style={styles.searchView}>
                <TextInput placeholder="Ara..." autoCapitalize={'none'}
                           onChangeText={text=>this.searchInContacts(text)} style={styles.searchInput} />
            </View>
        )
    };


    renderFooter(){
        return(
            <View style={{backgroundColor:'red'}}>
                <Text>Merhaba</Text>
            </View>
        )
    }

    renderItem = ({item,index}) => {
        return(
            <TouchableHighlight activeOpacity={0.8} underlayColor={index % 2 ===0 ? '#7e4545': '#943d3d'} onPress={ () => {}}  >
                <View style={[styles.touchableObject,{backgroundColor: index % 2 === 0? this.state.backgroundColorEven: this.state.backgroundColorOdd}]}>
                    <View style={styles.imgArea}>
                        <Image style={styles.img} source={{uri:item.picture.medium}}/>
                    </View>
                    <View style={styles.infoArea}>
                        <Text style={styles.nameText}>{item.name.first}</Text>
                        <Text style={styles.nameCorp}>{item.name.last}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
    return (
      <View>
        <FlatList
          ListFooterComponent={this.renderFooter()}
          ListHeaderComponent={this.searchComponent()}
          data={this.state.contacts}
          renderItem={this.renderItem}
          keyExtractor={item=>item.login.uuid}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
    touchableObject:{
        padding:10,
        flex:1,
        flexDirection:"row",
    },
    imgArea:{
        flex: 1.5,
    },
    infoArea:{
        flex:5,
    },
    img: {
        width:75,
        height:75,
        borderRadius:37.5
    },
    nameText:{
        color: '#3b3b3b',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
    },
    nameCorp:{
        color: '#3b3b3b',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
    },

    searchView:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ff9292'
    },
    searchInput:{
        backgroundColor: '#faacac',
        borderWidth:5,
        borderRadius: 45,
        borderColor: '#fd6666',
        paddingHorizontal: 25,
    },

});
