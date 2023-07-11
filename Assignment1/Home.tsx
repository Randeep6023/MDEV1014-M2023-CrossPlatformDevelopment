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
    
    <ImageBackground source={require('./assets/home.webp')} style = {styles.titleBG}>
      <Text style={styles.title}>Shop it!</Text>
    </ImageBackground>
    
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
  return(
    <View>
      <TouchableOpacity>
        <Image source = {require('./assets/GymWear.png')} style={styles.GymWearWrapper}/>
        <Text style={styles.GymWeartext}>Gym Wear</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source = {require('./assets/Watches.png')} style={styles.WatchesWrapper}/>
        <Text style={styles.Watchestext}>Watches</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source = {require('./assets/Shoes.png')} style={styles.ShoesWrapper}/>
        <Text style={styles.Shoestext}>Shoes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source = {require('./assets/Trousers.png')} style={styles.TrousersWrapper}/>
        <Text style={styles.Trouserstext}>Torusers</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source = {require('./assets/Shirts.png')} style={styles.ShirtsWrapper}/>
        <Text style={styles.Shirtstext}>Shirts</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Flex;

const styles = StyleSheet.create({
  Felxcontainer:{
    flex:1,
    flexDirection:'column',
    alignContent:'space-between',
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
  imagecontainer:{
    flex:1,
    flexDirection:'row',
    alignContent:'space-between',
    alignItems:'stretch',
    position:'relative',
    left:-160
  },
  GymWearWrapper:{
    height:70,
    width:70,
    borderRadius:35,
    position:'relative',
    top: 10
  },
  
  WatchesWrapper:{
    height:70,
    width:70,
    borderRadius:35,
    position:'relative',
    right:-80,
    top:-80
  },
  ShoesWrapper:{
    height:70,
    width:70,
    borderRadius:35,
    position:'relative',
    right:-160,
    top:-170
  },
  TrousersWrapper:{
    height:70,
    width:70,
    borderRadius:35,
    position:'relative',
    right:-240,
    top:-260
  },
  ShirtsWrapper:{
    height:70,
    width:70,
    borderRadius:35,
    position:'relative',
    right:-320,
    top:-350
  },
  GymWeartext:{
    textAlign:'center',
    top:10
  },
  Watchestext:{
    textAlign:'center',
    top:-80,
    right:-80
  },
  Shoestext:{
    textAlign:'center',
    top:-170,
    right:-160

  },
  Trouserstext:{
    textAlign:'center',
    top:-260,
    right:-240
  },
  Shirtstext:{
    textAlign:'center',
    top:-347,
    right:-320
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