import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchResult from './SearchResult';
import Login from './Login';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import OrderHistory from './OrderHistory';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="Navigation" component={Navigation} />
        {/* Other screen components */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
