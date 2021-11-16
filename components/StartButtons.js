import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const StartButtons = (props) => {
    return (
        <View style={styles.startButtons}>
            <TouchableOpacity onPress={() => props.startTimer(15)} style={styles.startButtonContainer}>
                <Text style={styles.buttonText}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.startTimer(30)} style={styles.startButtonContainer}>
                <Text style={styles.buttonText}>30</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.startTimer(45)} style={styles.startButtonContainer}>
                <Text style={styles.buttonText}>45</Text>
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    startButtonContainer: {
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#74bdcb',
        marginBottom: 10,
        marginRight: 10,
        height: 60,
        width: 60
    },
    buttonText: {
        color: '#e7f2f8',
        fontSize: 20,
        fontWeight: 'bold',
    },
});