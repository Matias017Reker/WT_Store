import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../components/NavBar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NavBar/>
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
  app: {
    flex: 1,
    backgroundColor: 'rgb(0, 38, 87)',
    padding: 10,
  },
});