import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, Platform, ScrollView } from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <SearchBox />
      <ContentList />
      <HomeScreen />
      <DescriptionItems/>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.titleContainer}>
      <Image source={require('./assets/HomeShopping.jpeg')} style={styles.titleBG} />
      <Text style={styles.title}>Shop it!</Text>
    </View>
  );
};

const SearchBox = () => {
  const [value, setValue] = useState('');

  return (
    <View style={SBStyles.container}>
      <TextInput
        style={SBStyles.input}
        placeholder="Search"
        onChangeText={(text) => setValue(text)}
        value={value}
      />
    </View>
  );
};

const ContentList = () => {
  return (
    <View style={styles.imagecontainer}>
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={require('./assets/GymWear.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Gym Wear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={require('./assets/Shoes.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Shoes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={require('./assets/Trousers.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Trousers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={require('./assets/Shirts.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Shirts</Text>
      </TouchableOpacity>
    </View>
  );
};

const DescriptionItems =() =>{

  return(
      <ScrollView>
          <Text style={styles.categoryText}>Dresses</Text>
          <TouchableOpacity style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion1.png')} style={styles.ImageWrapper} />
            <Text style={styles.DescriptionStyle}>Womens one piece(Black)</Text>
            <Text>30 CAD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion2.png')} style={styles.ImageWrapper}/>
            <Text style={styles.DescriptionStyle}>NIKA Full Length Frock(Black)</Text>
            <Text>50 CAD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion3.png')} style={styles.ImageWrapper}/>
            <Text style={styles.DescriptionStyle}>Mens Fashion</Text>
            <Text>Starts from 40 CAD</Text>
          </TouchableOpacity>
      </ScrollView >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 0 : 0, // Adjust top padding for Android
    backgroundColor: '#66BB6A',
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{ translateY: -12.5 }],
  },
  titleBG: {
    width: '100%',
    height: Platform.OS == "web" ? 600 : 200,
    resizeMode : "cover"
  },
  imagecontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  itemText: {
    textAlign: 'center',
    marginTop: 5,
  },
  categoryText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionItem:{
    alignItems: 'center',
    marginVertical: 10,
  },
  ImageWrapper: {
    width: '100%',
    height: 170,
    marginVertical: 10,
  },
  DescriptionStyle :{
  },
});

const SBStyles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
  input: {
    height: 20,
    color: '#333',
    fontSize: 16,
  },
});

export default Flex;
