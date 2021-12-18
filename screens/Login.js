import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Login Here</Text>
            <Button title='Login' onPress={()=>navigation.navigate('signUp')}/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})
