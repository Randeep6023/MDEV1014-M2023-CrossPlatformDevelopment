import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.avatar}
          source={require('./assets/profile.jpeg')} // Replace with your own avatar image URL
        />
        {/* Replace with the username */}
        <Text style={styles.username}>User Name</Text> 
      </View>
      <View style={styles.profileContent}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.infoText}>Email: username@example.com</Text>
        <Text style={styles.infoText}>Phone: +1 123-456-7890</Text> 
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.infoText}>123 Main Street</Text> 
        <Text style={styles.infoText}>City: Anytown</Text>
        <Text style={styles.infoText}>Country: United States</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  profileContent: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;
