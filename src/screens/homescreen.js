import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // ✅ agregado

export default function HomeScreen() {
  const navigation = useNavigation(); // ✅ hook

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>

        <Text style={styles.logoText}>WarThunder Store</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Carrito')}>
          <Ionicons name="cart-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.app}>
        <Text style={{ color: 'white' }}>Contenido de la pantalla de inicio</Text>
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  app: {
    flex: 1,
    backgroundColor: 'rgb(0, 38, 87)',
    padding: 10,
  },
});