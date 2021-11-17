import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const StartButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.startTimer(props.time)}
            style={[styles.startButtonContainer, props.last && styles.lastButton]}
        >
            <Text style={styles.buttonText}>{props.time}</Text>
        </TouchableOpacity>
    )
}

export default StartButton;

const styles = StyleSheet.create({
    startButtonContainer: {
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#74bdcb',
        marginRight: 10,
        height: 60,
        width: 60
    },
    buttonText: {
        color: '#e7f2f8',
        fontSize: 20,
        fontWeight: 'bold',
    },
    lastButton: {
        marginRight: 0,
    },
});
