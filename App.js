import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../project2/screens/Home';
import Form from '../project2/screens/Form';
const Drawer=createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Drawer.Navigator>
  <Drawer.Screen name='home' component={Home}/>
  <Drawer.Screen name='form' component={Form}/>
</Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
