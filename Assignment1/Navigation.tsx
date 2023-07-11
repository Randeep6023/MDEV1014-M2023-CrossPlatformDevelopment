import React from "react";
import { Button, ImageBackground, Platform, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const isWeb = Platform.OS ==  "web"

const Navigation = () => {
    const navigation = useNavigation();

  const Home = () => {
    navigation.navigate('Home');
  };

  const Login = () => {
    navigation.navigate('Login');
  };

  const Signup = () => {
    navigation.navigate('Signup');
  };

  const OrderHistory = () => {
    navigation.navigate('OrderHistory');
  };

  const Profile = () => {
    navigation.navigate('Profile');
  };

  const SearchResult = () => {
    navigation.navigate('SearchResult');
  };

  const Cart = () => {
    navigation.navigate('Cart');
  };

    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[styles.boxStyle, styles.topBar]}>
                <View style = {styles.textArea}>
                    <Text style = {styles.screenText}>Navigation</Text>
                </View>
            </View>



            <View style = {[styles.boxStyle, styles.box2]}>
                <TouchableOpacity style = {styles.productContainer} onPress={Home}>
                    <ImageBackground source={require('./assets/home.webp')} style={styles.productImage}>
                        <Text style={styles.textArea}>Home Page</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={Login}>
                <ImageBackground source={require('./assets/Login.jpg')} style={styles.productImage}>
                        <Text style={styles.textArea}>Login</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={Signup}>
                <ImageBackground source={require('./assets/Signup.jpg')} style={styles.productImage}>
                        <Text style={styles.textArea}>Signup</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={SearchResult}>
                <ImageBackground source={require('./assets/searchresult.jpeg')} style={styles.productImage}>
                        <Text style={styles.textArea}>Search Result</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={Cart}>
                <ImageBackground source={require('./assets/cart.jpg')} style={styles.productImage}>
                        <Text style={styles.textArea}>Cart</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={Profile}>
                <ImageBackground source={require('./assets/profile.webp')} style={styles.productImage}>
                        <Text style={styles.textArea}>Profile</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={OrderHistory}>
                <ImageBackground source={require('./assets/orderhistory.jpg')} style={styles.productImage}>
                        <Text style={styles.textArea}>Order History</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     wrapper : {
        flex : 1,
        flexDirection : "column",
        backgroundColor: '#66BB6A',
    },
    boxStyle : {
        width : "100%",
        padding : 10,
        //marginTop : 10,
        backgroundColor : "white",
        alignItems: "center",
    },
    topBar : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start",
        flexDirection : "row",
        marginTop : Platform.OS == "android" ? 20 : undefined,
        alignItems: "center",   
    },
    textArea : {
        flex : 1,
        alignContent : "center",
        textAlign : "center",
        fontSize : 25
    },
    screenText : {
        alignSelf : "center",
        justifyContent : "center",
        fontSize : 30,
        justifyContent : Platform.OS == "web" ? "center" : "flex-start",
        alignItems: "center",
    },
  

    box1 : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start",
        flexDirection : "row",
    },
    box1content : {
        width : "100%",
        borderWidth : 2,
        borderRadius : 10,
        borderColor : '#BDBDBD',
        backgroundColor : 'white',
        //alignSelf : "flex-start",
        flexDirection : "row",
        alignItems : "center",
        height : 40,
        //marginLeft : 10
    },
    box2 : {
        flex : 1,
        justifyContent : Platform.OS == "web" ? "center" : "flex-start",
        flexDirection : "column",
        flexWrap : Platform.OS == "web" ? "wrap" : "nowrap"
    },
    productContainer : {
        backgroundColor : "#E0E0E0",
        flex : 0.3,
        margin : Platform.OS == "web" ? 5 : 3,
        flex : Platform.OS == "web" ? 1 : 0.3,
        borderRadius: 10,
        //justifyContent: 'center'
        //alignItems: "center"
        flexDirection : "row",
        minWidth : Platform.OS == "web" ? "49%" : undefined,
        height: 150,
    },
    productImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },


})

export default Navigation