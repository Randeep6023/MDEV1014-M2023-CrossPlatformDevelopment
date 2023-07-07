import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import SwiperItem from 'react-native-swiper';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import Align from 'react-native';
import { Image } from 'react-native/Libraries/Image/Image';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBox = () => {
    const [value, setValue] = React.useState('');

    return (
        <View style={searchboxstyles.container}>
        <TextInput
            style={searchboxstyles.input}
            placeholder="Search"
            onChangeText={(text) => setValue(text)}
            value={value}
        />
        </View>
    );
    };

const searchboxstyles = StyleSheet.create({
    container: {
      width: '100%',
      height: 40,
      borderRadius: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      
    },
    input: {
      height: 40,
      color: '#333',
      fontSize: 16,
    },
  });

  export default SearchBox;