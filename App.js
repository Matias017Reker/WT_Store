import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import MarketScreen from './src/screens/MarketScreen';
import AccountScreen from './src/screens/AccountScreen';
import CartScreen from './src/screens/CartScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Market" component={MarketScreen} />
        <Drawer.Screen name="Mi Cuenta" component={AccountScreen} />
        <Drawer.Screen name="Carrito" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}