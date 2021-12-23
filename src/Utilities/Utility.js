import {navigationRef} from '../Navigation/RootNavigator'

export const log = (TAG, message) => {
    if (__DEV__) {
        console.log(TAG, message);
    }
}

export const navigateToScreen = (screenName, props = {}) => {
    console.log("navigate to", screenName)
    navigationRef.current?.navigate(screenName, props)
};

export const goBack = () => {
    navigationRef.current?.goBack()
}

