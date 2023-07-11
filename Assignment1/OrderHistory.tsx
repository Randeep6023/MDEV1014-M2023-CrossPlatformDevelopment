import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const OrderHistoryScreen = () => {
const orders = [
{
id: '1',
date: '2023-07-10',
total: 50.99,
items: [
{
id: '1',
name: 'Product 1',
quantity: 2,
price: 9.99,
image: require('./assets/Shoes.png'),
},
{
id: '2',
name: 'Product 2',
quantity: 1,
price: 12.99,
image: require('./assets/table1.jpeg'),
},
],
},
// Add more orders as needed
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.orderContainer}>
      <Text style={styles.orderDate}>{item.date}</Text>
      <Text style={styles.orderTotal}>Total: ${item.total}</Text>
      <FlatList
        data={item.items}
        keyExtractor={(product) => product.id}
        renderItem={({ item: product }) => (
          <View style={styles.itemContainer}>
            <Image source={product.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{product.name}</Text>
              <Text style={styles.itemPrice}>
                Quantity: {product.quantity} | Price: ${product.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

return (
<View style={styles.container}>
<Text style={styles.title}>Order History</Text>
<FlatList
data={orders}
keyExtractor={(item) => item.id}
renderItem={renderItem}
contentContainerStyle={styles.listContainer}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
paddingTop: 20,
},
title: {
fontSize: 25,
fontWeight: 'bold',
marginBottom: 10,
},
listContainer: {
width: '90%',
},
orderContainer: {
marginBottom: 20,
},
orderDate: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
orderTotal: {
fontSize: 16,
marginBottom: 5,
},
itemContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
itemImage: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
itemDetails: {
flex: 1,
},
itemName: {
fontSize: 16,
fontWeight: 'bold',
},
itemPrice: {
fontSize: 14,
color: '#777',
},
});

export default OrderHistoryScreen