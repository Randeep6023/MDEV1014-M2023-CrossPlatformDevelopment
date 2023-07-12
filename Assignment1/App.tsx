import React from 'react';
import { StatusBar } from 'expo-status-bar';

import SearchResult from './SearchResult';
import Login from './Login';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import OrderHistory from './OrderHistory';
import Signup from './Signup';


const Stack = createNativeStackNavigator();
import { StyleSheet, Text, View, TextInput} from 'react-native';



const App = () => {
  return (
    <><NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#66BB6A', // Set your desired background color here
        },
      }} initialRouteName="OneStopShop">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="OneStopShop" component={Navigation} />
        {/* Other screen components */}
      </Stack.Navigator>
    </NavigationContainer><View style={styles.container}>
      </View></> 
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66BB6A',
  },
});
