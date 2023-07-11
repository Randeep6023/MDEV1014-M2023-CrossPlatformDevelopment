import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity,FlexAlignType, TextInput, ImageBackground, Platform, Image } from 'react-native';

const Flex = () =>{
  return(
    <View style={styles.Felxcontainer}>
      <View style={styles.titleContainer}><HomeScreen/></View>
      <View style={SBStyles.container}><SearchBox /></View>
      <View style={styles.imagecontainer}><ContentList /></View>
    </View>
  )
}

const HomeScreen = () => {
  const [alignSelf, setAlignSelf] = useState<FlexAlignType>('stretch');
  return (
    <TouchableOpacity>
       <ImageBackground source={require('./assets/home.webp')} style = {styles.titleBG}>
          <Text style={styles.title}>Shop it!</Text>
        </ImageBackground>
    </TouchableOpacity>
    
  );
};

const SearchBox = () => {
  const [value, setValue] = React.useState('');

  return (
    <View>
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
  const categories = [
    {
      name: 'Fashion',
      icon: 'ios-shirt',
    },
    {
      name: 'Electronics',
      icon: 'ios-headphones',
    },
    {
      name: 'Shoes',
      icon: 'ios-shoe',
    },
  ];
  return(
    <View>
      <View>
        <Image source = {require('./assets/GymWear.png')} style={styles.ImageWrapper}/>
        </View>
      <Text style={styles.catogarytext}>Gym Wear</Text>
      <View>
        <Image source = {require('./assets/Watches.png')} style={styles.ImageWrapper}/>
        <Text style={styles.catogarytext}>Watches</Text>
      </View>
      <View>
        <Image source = {require('./assets/Shoes.png')} style={styles.ImageWrapper}/>
        <Text style={styles.catogarytext}>Shoes</Text>
      </View>
      <View>
        <Image source = {require('./assets/Trousers.png')} style={styles.ImageWrapper}/>
        <Text style={styles.catogarytext}>Torusers</Text>
      </View>
      <View>
        <Image source = {require('./assets/Shirts.png')} style={styles.ImageWrapper}/>
        <Text style={styles.catogarytext}>Shirts</Text>
      </View>
    </View>
  );
};
export default Flex;

const styles = StyleSheet.create({
  Felxcontainer:{
    flex:1,
    flexDirection:'column',
    alignItems :'center',
    width: '100%',
    
  },

  titleContainer : {
    width:'100%'

  },
  header:{

  },
  title:{
      fontSize: 25,
      color: '#333',
      fontWeight: 'bold',
      textAlign:'center',
  },
  titleBG:{
    
  },
  ImageWrapper:{
    height:70,
    width:70,
    borderRadius:35,
  },
  imagecontainer:{
    flex:1,
    flexDirection:'row',
    alignContent:'space-between'
  },
  catogarytext:{
    textAlign:'center'
  }
})

const SBStyles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    paddingTop: 10,
    flexDirection: 'column',
    alignContent:'space-around',
    marginTop : 5
  },
  input: {
    height: 20,
    color: '#333',
    fontSize: 16,
  },
});