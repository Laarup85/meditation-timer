import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cancelbutton from '../components/CancelButton';
import StartButtons from '../components/StartButtons';
import Timer from '../components/Timer';
import dim from '../lib/dimmer';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

const HomeScreen = () => {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(false);

    const startTimer = (time) => {
        if (start) {
            setStart(false);
            setTime(0);
        }
        dim(0.1);
        setStart(true);
        setTime(time);
        activateKeepAwake();
    }

    const stopTimer = () => {
        dim(1);
        setStart(false);
        deactivateKeepAwake();
    }

    return (
        <View style={styles.container}>
            <View style={styles.startButtonsContainer}>
                <StartButtons startTimer={startTimer} />
            </View>
            <View style={styles.timerContainer}>
                <Timer start={start} time={time} stopTimer={stopTimer} />
            </View>
            <View style={styles.cancelButton}>
                <Cancelbutton stopTimer={stopTimer} />
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 130
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
