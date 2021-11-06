import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Vibration } from 'react-native';
import { Audio } from 'expo-av';

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
        startTimer -= 1;
        if (!time) {
            setTimeLeft(0);
            clearInterval(interval);
            return;
        }
        interval = setInterval(() => {
            if (startTimer === 0) {
                playSound();
                Vibration.vibrate();
                clearInterval(interval);
                props.stopTimer();
                return;
            }
            if (time >= 20 && startTimer % 10 === 0) {
                playSound();
            }
            setTimeLeft(startTimer);
            startTimer -= 1;
        }, 1000 * 60);
    }

    return (
        <Text style={styles.countdownTime}>{timeLeft}</Text>
    );
}

export default Timer;

const styles = StyleSheet.create({
    countdownTime: {
        fontSize: 150,
        color: '#ccc',
    },
});
