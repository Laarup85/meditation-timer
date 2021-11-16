import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
                <StartButtons startTimer={startTimer} style={styles.startButtons}/>
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
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 70
    },
    startButtonsContainer: {
        flex: 1,
    },
    timerContainer: {
        flex: 2
    },
    cancelButton: {
        flex: 1,
    },
});
