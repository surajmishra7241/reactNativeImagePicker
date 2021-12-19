import React,{useState} from 'react'
import { Button, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
const Home = () => {
    const [image, setImage] = useState(null);
    const openImagePickerGallery = async () => {
   const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync(); 
    setImage(pickerResult.uri);
  }

   const openImagePickerCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchCameraAsync();
    setImage(pickerResult.uri);
  }

    
    return (
        <View style={styles.container}>
            <Text>Welcome To DashBoard</Text>
            <Image style={styles.decorate} source={{uri:image}}/>
           <TouchableOpacity onPress={()=>openImagePickerGallery()} style={styles.touchableOpacity}>
            <Text>open gallery</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>openImagePickerCamera()} style={styles.touchableOpacity}>
            <Text>open camera</Text></TouchableOpacity>
           
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    decorate:{
        width:300,
        height:300,
        borderColor:'black',
        borderWidth:5
    } ,
    touchableOpacity:{
            backgroundColor:'red',
            width:100,height:40,
            justifyContent:'center',
            alignItems:'center'
    } 
})
