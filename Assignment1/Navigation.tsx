import React from "react";
import { Button, ImageBackground, Platform, SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

const isWeb = Platform.OS === "web";

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

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyle, styles.topBar]}>
        <View style={styles.textArea}>
          <Text style={styles.screenText, styles.firstPageText}>Navigation</Text>
        </View>
      </View>

      <View style={[styles.boxStyle, styles.box2]}>
        <TouchableOpacity style={[styles.productContainer, styles.darkestGreen]} onPress={Home}>
          <Text style={styles.text}>Home Page</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.productContainer, styles.darkestGreen]} onPress={Login}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.productContainer, styles.darkestGreen]} onPress={SearchResult}>
          <Text style={styles.text}>Search Result</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.productContainer, styles.darkestGreen]} onPress={Cart}>
          <Text style={styles.text}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.productContainer, styles.darkestGreen]} onPress={Profile}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.productContainer, styles.darkestGreen]} onPress={OrderHistory}>
          <Text style={styles.text}>Order History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#C5E1A5',
  },
  boxStyle: {
    width: "100%",
    padding: 10,
    backgroundColor: '#C8E6C9',
    alignItems: "center",
  },
  firstPageText: {
    fontSize: 50,
  },
  topBar: {
    backgroundColor: '##E8F5E9',
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? 20 : undefined,
    alignItems: "center",
  },
  textArea: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    fontSize: 25,
  },
  screenText: {
    fontSize: 30,
    alignSelf: "center",
    justifyContent: Platform.OS === "web" ? "center" : "flex-start",
    alignItems: "center",
    color: "black",
  },
  box2: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  productContainer: {
    width: "80%",
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  darkestGreen: {
    backgroundColor: '#66BB6A',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});

export default Navigation;
