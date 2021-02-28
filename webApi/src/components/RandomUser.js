import React, { Component } from 'react';
import {Button,  StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export default class RandomUser extends Component {

    state={
        name:'',
        surname:'',
        title:'',
        loading:true
    }

    componentDidMount() {
        this.getRandomUser()
    }

    getRandomUser =async () =>{
        this.setState({
            loading: true,
        });

        const {data:{results}} = await axios.get('https://randomuser.me/api/')
        const {name: {first, last, title}}= results[0]
        this.setState({
            name:first,
            surname: last,
            title: title,
            loading: false,
        })
    }
  render() {
      const {name, surname, loading, title} = this.state
    return (
        <View style={styles.viewContainer}>
            <View style={{flexDirection: 'row'}}>
                {
                    loading ? <Text>Loading..</Text> :
                        <View style={{flexDirection: 'row'}}>
                            <Text>{title}. </Text>
                            <Text>{name} </Text>
                            <Text>{surname}</Text>
                        </View>
                }
            </View>
          <Button title='Get Random User' onPress={this.getRandomUser}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});
