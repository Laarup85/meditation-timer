import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import StartButton from './StartButton';

const StartButtons = (props) => {
    return (
        <View style={styles.startButtons}>
            <StartButton startTimer={props.startTimer} time={15}/>
            <StartButton startTimer={props.startTimer} time={30}/>
            <StartButton startTimer={props.startTimer} time={45}/>
            <StartButton startTimer={props.startTimer} time={60} last={true}/>
        </View>
    );
}

export default StartButtons;

const styles = StyleSheet.create({
    startButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});