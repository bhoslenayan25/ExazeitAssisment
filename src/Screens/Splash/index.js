import React, { useEffect } from 'react';

import { View, Text, NativeModules } from 'react-native';
import { screens } from '../../Navigation/Constants';
import { log, navigateToScreen } from '../../Utilities/Utility';

import styles from './style';
const Splash = () => {

    useEffect(() => {

        NativeModules.EmulatorDetectation.isRunningOnEmulator()
            .then((res) => {
                log('=====isRunningOnEmulator', res)
                if (res)
                    alert('Running on Emulator')
            }).catch((err) => {
                log('=====isRunningOnEmulator', err)
            })

    setTimeout(async () => {
        navigateToScreen(screens.USER_DETAILS)
    }, 3000)
})

return (
    <View style={styles.container}>
        <Text>Welcome to Exazeit Assignment</Text>
    </View>
);

}

export default Splash