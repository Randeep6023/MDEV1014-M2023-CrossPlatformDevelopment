// import React from 'react';
// import { View, Text } from 'react-native';

// const Cart = () => {
//   return (
//     <View>
//       <Text>Cart</Text>
//     </View>
//   );
// };

// export default Cart;

import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Touchable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CartScreen = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Coffee Table', price: 100, quantity: 1, image: require('./assets/table1.jpeg')},
    { id: 2, name: 'Comb', price: 20, quantity: 1, image: require('./assets/comb.png')},
    { id: 3, name: 'Toy', price: 15, quantity: 1, image: require('./assets/toy.png')}
  ];

  // Function to handle checkout button press
  const handleCheckout = () => {
    // Implement your checkout logic here
    alert('Checkout button pressed!');
  };

   return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Shopping Cart</Text>
      </View> */}

      <View style={styles.content}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <View style = {styles.imageContainer}>
                <Image source = {item.image} style = {styles.itemImage} />
              </View>
              
              <View style={styles.itemInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.deleteButton}>
                  <Text style = {styles.deleteButtonText}>Delete</Text>
                </View>
              </View>
             
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <View style = {styles.eachRow}>
                <Text style={styles.totalText}>Total Price: </Text>
                <Text style = {styles.rowValue}>$135</Text>
              </View>
              <View style = {styles.eachRow}>
                <Text style={styles.deliveryCharge}>Delivery Charge: </Text>
                <Text style = {styles.rowValue}>$10</Text>
              </View>
              <View style = {styles.eachRow}>
                <Text style={styles.finalPrice}>Final Price: </Text>
                <Text style = {styles.finalPriceValue}>$145</Text>
              </View>
              <View style = {styles.eachRow}>
                <Text style={styles.etaText}>ETA: 2-3 Business days </Text>
              </View>
              
            </View>
          )}
        />
      </View>
      <View style={styles.bottomButton}>
        <Text style = {styles.buttonText}>Proceed to Pay</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A',
  },
  header: {
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft : 10,
    flex: 1
  },
  name: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize : 20
  },
  imageContainer : {

  },
  itemImage : {
    width : 60,
    height : 60,
    resizeMode : "cover",
  },
  price: {
    color: 'black',
    fontWeight : "700",
    alignSelf : "center"
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  quantity: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  footer: {
    marginTop: 20,
  },
  totalText: {
    fontSize: 17,
    marginBottom: 10,
    flex: 1
  },
  rowValue: {
    fontSize: 17,
    marginBottom: 10,
  },
  deliveryCharge: {
    fontSize: 17,
    marginBottom: 10,
    flex: 1
  },
  finalPrice: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 10,
    flex: 1
  },
  finalPriceValue: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 10,
  },
  etaText: {
    fontSize: 17,
    marginBottom: 5,
  },
  eachRow: {
    flexDirection: "row",
  },
  bottomButton: {
    backgroundColor: 'black',
    marginBottom: 18,
    height: 55,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
  },
  buttonText: {
    color : "white",
    fontWeight : "bold",
    fontSize : 20
  },
  deleteButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    marginTop : 5,
    height : 30
  },
  deleteButtonText: {
    color: 'white',
    margin : 5
  },
});

export default CartScreen;