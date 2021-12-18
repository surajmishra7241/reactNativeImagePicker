import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>SignUp Here</Text>
            <Button title='SignUp' onPress={()=>navigation.navigate('login')}/>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    }
})
