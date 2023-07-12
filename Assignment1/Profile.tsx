import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('User Name');
  const [email, setEmail] = useState('username@example.com');
  const [phone, setPhone] = useState('+1 123-456-7890');
  const [address, setAddress] = useState('123 Main Street');
  const [city, setCity] = useState('Anytown');
  const [country, setCountry] = useState('United States');

  const saveInformation = () => {
    // Perform the logic to save the information
    Alert.alert('Information Saved', 'The information has been saved successfully.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.avatar}
          source={require('./assets/profile.jpeg')} // Replace with your own avatar image URL
        />
        <TextInput
          style={[styles.username, styles.whiteBackground]} // Added styles.whiteBackground
          value={name}
          onChangeText={setName}
          placeholder="User Name"
        />
      </View>
      <View style={styles.profileContent}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoSection}>
          <TextInput
            style={[styles.infoText, styles.whiteBackground]} // Added styles.whiteBackground
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            style={[styles.infoText, styles.whiteBackground]} // Added styles.whiteBackground
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone"
          />
        </View>
        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.infoSection}>
          <TextInput
            style={[styles.infoText, styles.whiteBackground]} // Added styles.whiteBackground
            value={address}
            onChangeText={setAddress}
            placeholder="Address"
          />
          <TextInput
            style={[styles.infoText, styles.whiteBackground]} // Added styles.whiteBackground
            value={city}
            onChangeText={setCity}
            placeholder="City"
          />
          <TextInput
            style={[styles.infoText, styles.whiteBackground]} // Added styles.whiteBackground
            value={country}
            onChangeText={setCountry}
            placeholder="Country"
          />
        </View>
        <TouchableOpacity style={[styles.button, styles.whiteBackground]} onPress={saveInformation}>
          <Text style={[styles.buttonText, styles.blackText]}>Save Information</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A', // Set the background color to green
    justifyContent: 'center', // Center the content vertically
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  profileContent: {
    paddingHorizontal: 20,
    alignItems: 'center', // Center the content horizontally
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  infoSection: {
    alignItems: 'center', // Center the content horizontally
    width: '100%', // Occupy the full width of the parent view
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center', // Center the text within each input field
    width: '100%', // Occupy the full width of the parent view
  },
  whiteBackground: {
    backgroundColor: '#fff', // Set the background color to white
  },
  button: {
    width: '80%',
    backgroundColor: '#66BB6A',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  blackText: {
    color: '#000', // Set the text color to black
  },
});

export default ProfileScreen;

