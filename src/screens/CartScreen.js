import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CartScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>Este es el carrito de compras</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'rgb(0, 38, 87)',
    alignItems: 'center',
    justifyContent: 'center',
},
text: {
    color: 'white',
    fontSize: 18,
},
});