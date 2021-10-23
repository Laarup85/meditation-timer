import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Cancelbutton from './components/CancelButton';
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
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Meditatsiooni kestus:</Text>
            </View>
            <View style={styles.startButtonsContainer}>
                <StartButtons startTimer={startTimer} />
            </View>
            <View style={styles.timerContainer}>
                <Timer start={start} time={time} stopTimer={stopTimer} />
            </View>
            <View style={styles.cancelButton}>
                <Cancelbutton stopTimer={stopTimer}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5b6980',
        alignItems: 'center',
        paddingTop: 130,
        flexDirection: 'column',
    },
    titleContainer: {
        flex: 1
    },
    title: {
        color: '#ccc',
        fontWeight: 'bold',
        fontSize: 30,
    },
    startButtonsContainer: {
        flex: 2,
        margin: 'auto'
    },
    buttonText: {
        color: '#ccc',
        fontSize: 30,
        fontWeight: 'bold'
    },
    timerContainer: {
        flex: 3
    },
    countdownTime: {
        fontSize: 60,
        color: '#ccc',
    },
    cancelButton: {
        flex: 2,
    },
});
