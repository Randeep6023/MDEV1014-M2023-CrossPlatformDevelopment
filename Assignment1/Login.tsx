import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // TODO: Perform login logic here
  };

  const handleSignup = () => {
    navigation.navigate('Signup'); // Navigate to the Signup screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.logo}>OneStopShop</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#009688',
  },
  loginBtn: {
    width: '50%',
    backgroundColor: '#6b8df2',
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fafafa',
    fontSize: 18,
  },
  signupBtn: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#009688',
    fontSize: 18,
  },
});

export default Login;
