import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
const navigation = useNavigation();

return (
    <View style={styles.navbar}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="white" />
    </TouchableOpacity>

    <Text style={styles.logoText}>WarThunder Store</Text>

    <TouchableOpacity onPress={() => navigation.navigate('Carrito')}>
        <Ionicons name="cart-outline" size={28} color="white" />
    </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
navbar: {
    height: 70,
    backgroundColor: 'rgb(161, 7, 7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 30,
},
logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
},
});