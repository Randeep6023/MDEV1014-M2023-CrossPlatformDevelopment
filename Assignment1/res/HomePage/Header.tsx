import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import SwiperItem from 'react-native-swiper';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView} from 'react-native';
import { Image } from 'react-native/Libraries/Image/Image';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    height: 60,
    backgroundColor: '#333',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign : 'center',
    paddingTop: 15,
  },
  products: {
    flex: 1,
    marginTop: 20,
  },
  product: {
    width: '100%',
    height: 200,
    margin: 10,
    borderRadius: 5,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  productTitle: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#999',
    fontSize: 14,
  },
});

function render() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Shopping App</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}


export default render;