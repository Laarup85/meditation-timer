import * as Brightness from 'expo-brightness';

const dim = async (level) => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(level);
    }
}

export default dim;