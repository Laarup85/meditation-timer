import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import StartButtons from './components/StartButtons';
import Timer from './components/Timer';

export default function App() {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(false);

    const startTimer = (time) => {
        if (start) {
            setStart(false);
            setTime(0);
        }
        setStart(true);
        setTime(time);
    }

    const stopTimer = () => {
        setStart(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meditatsiooni taimer</Text>
            <StartButtons startTimer={startTimer} />
            <Timer start={start} time={time} stopTimer={stopTimer} />
            <View>
                <TouchableOpacity onPress={stopTimer} style={styles.operationButtonContainer}>
                    <Text style={styles.buttonText}>Katkesta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 130
    },
    title: {
        color: '#ccc',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 70
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    countdownTime: {
        fontSize: 60,
        color: '#ccc',
        marginBottom: 80
    },
    operationButtonContainer: {
        backgroundColor: '#ccc',
        width: 240,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        padding: 10
    }
});
