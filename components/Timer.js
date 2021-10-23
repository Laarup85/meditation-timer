import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import {Audio} from 'expo-av';

let interval = () => { };

const Timer = (props) => {
    const [timeLeft, setTimeLeft] = useState(0);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/ding.mp3')
        );

        await sound.playAsync();
    }

    useEffect(() => {
        if (props.start) {
            setCountdown(props.time);
        } else {
            setCountdown(0);
        }
    }, [props.start]);

    const setCountdown = (time) => {
        let startTimer = time;
        setTimeLeft(startTimer);
        if (!time) {
            setTimeLeft(0);
            clearInterval(interval);
            return false;
        }
        interval = setInterval(() => {
            if (startTimer === 0) {
                playSound();
                clearInterval(interval);
                props.stopTimer();
            }
            if (startTimer < 0) {
                props.stopTimer();
                clearInterval(interval);
                return;
            }
            if (time  >= 20 && startTimer % 10 === 0) {
                playSound();
            }
            setTimeLeft(startTimer);
            startTimer -= 1;
        }, 1000);
    }

    return (
        <Text style={styles.countdownTime}>{timeLeft}</Text>
    );
}

export default Timer;

const styles = StyleSheet.create({
    countdownTime: {
        fontSize: 100,
        color: '#ccc',
        // marginBottom: 100
    },
});
