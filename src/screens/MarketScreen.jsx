import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function MarketScreen() {
return (
    <View style={styles.container}>
    <NavBar />
    <View style={styles.content}>
        <Text style={styles.text}>Página del Market</Text>
    </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'rgb(0, 38, 87)',
},
content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
text: {
    color: 'white',
    fontSize: 18,
},
});