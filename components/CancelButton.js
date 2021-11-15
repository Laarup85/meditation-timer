import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Cancelbutton = (props) => {
    return (
        <TouchableOpacity onPress={props.stopTimer} style={styles.cancelButtonContainer}>
            <Text style={styles.buttonText}>Katkesta</Text>
        </TouchableOpacity>
    );
}

export default Cancelbutton;

const styles = StyleSheet.create({
    buttonText: {
        color: '#e7f2f8',
        fontSize: 30,
        fontWeight: 'bold'
    },
    cancelButtonContainer: {
        backgroundColor: '#74bdcb',
        width: 210,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
        padding: 10,
    }
});
