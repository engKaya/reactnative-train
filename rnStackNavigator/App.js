import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, NavigationActions} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: true
            }}>
                <Stack.Screen name="Home" options={{title:'home1'}}>
                    {params => <HomeScreen {...params} isim={'ibrahim'}/>}
                </Stack.Screen>
                <Stack.Screen name="Details" component={Details}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}



class HomeScreen extends Component{
    render() {
        const {route, navigation, isim} = this.props;
        return (
            <View>
                <Text>HOME {isim}</Text>
                <Button title='Details' onPress={()=>navigation.navigate("Details", {isim:'kaya'})}/>
            </View>
        );
    }
}

class Details extends Component{

    render() {
        const {route, navigation} = this.props;
        const {isim} = route.params;
        return (
            <View>
                <Text>Details {isim}</Text>
                <Button title='Home' onPress={()=> navigation.navigate("Home")}/>
                <Button title='Go back' onPress={()=>navigation.goBack()}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({});

