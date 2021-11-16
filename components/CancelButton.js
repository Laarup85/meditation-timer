import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Cancelbutton = (props) => {
    return (
        <TouchableOpacity onPress={props.stopTimer} style={styles.cancelButtonContainer}>
            {/* <Text style={styles.buttonText}>Katkesta</Text> */}
            <View style={styles.cancelButton}></View>
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
    cancelButton:{
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    cancelButtonContainer: {
        backgroundColor: '#74bdcb',
        width: 80,
        height: 80,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10,
    }
});
