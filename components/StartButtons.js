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
        justifyContent: 'space-around',
        width: '75%',
        flexWrap: 'wrap'
    },
    startButtonContainer: {
        width: 135,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#c77236',
        marginBottom: 10,
        marginRight: 5 
    },
    buttonText: {
        color: '#ccc',
        fontSize: 40,
        fontWeight: 'bold',
    },
});
