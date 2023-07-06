import React from "react";
import { Button, Platform, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
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
                    <Text style={styles.textArea}>Home Page</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={Login}>
                    <Text style={styles.textArea}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={SearchResult}>
                    <Text style={styles.textArea}>Search Result</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={Cart}>
                    <Text style={styles.textArea}>Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={Profile}>
                    <Text style={styles.textArea}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.productContainer} onPress={OrderHistory}>
                    <Text style={styles.textArea}>Order History</Text>
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
        backgroundColor : "white"
    },
    topBar : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start",
        flexDirection : "row",
        marginTop : Platform.OS == "android" ? 20 : undefined
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
        fontSize : 30
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
        flexDirection : Platform.OS == "web" ? "row" : "column",
        flexWrap : Platform.OS == "web" ? "wrap" : "nowrap"
    },
    productContainer : {
        backgroundColor : "#E0E0E0",
        flex : 0.3,
        margin : Platform.OS == "web" ? 5 : 3,
        //flex : Platform.OS == "web" ? 1 : 0.3,
        flexDirection : "row",
        minWidth : Platform.OS == "web" ? "49%" : undefined,
    },


})

export default Navigation