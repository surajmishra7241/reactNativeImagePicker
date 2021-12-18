import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import SignUp from './SignUp';
const Tab =createBottomTabNavigator();
const Form = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name='login' component={Login}/>
        <Tab.Screen name='signUp' component={SignUp}/>
    </Tab.Navigator>
    )
}

export default Form

const styles = StyleSheet.create({})
