import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const StartButtons = (props) => {
    return (
        <View style={styles.startButtons}>
            <TouchableOpacity onPress={() => props.startTimer(30)} style={styles.startButtonContainer}>
                <Text style={styles.buttonText}>30</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.startTimer(60)} style={styles.startButtonContainer}>
                <Text style={styles.buttonText}>60</Text>
            </TouchableOpacity>
        </View>
    );
}

export default StartButtons;

const styles = StyleSheet.create({
    startButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 80
    },
    startButtonContainer: {
        backgroundColor: '#ccc',
        width: 120,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
});
