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
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const CartScreen = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 }
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
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          )}
        />

        <Button title="Checkout" onPress={handleCheckout} />
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
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
});

export default CartScreen;