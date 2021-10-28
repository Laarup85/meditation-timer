import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { View, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <HomeScreen />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5b6980',
        alignItems: 'center',
        flexDirection: 'column',
    },
});