import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import UserDetails from '../Screens/UserDetails';
import { screens } from './Constants';
import { colorCode } from '../Utilities/AppConstants';
import Buttons from '../Screens/Buttons';
const Stack = createStackNavigator();
export const navigationRef = React.createRef();

function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={screens.SPLASH}
        screenOptions={({ navigation }) => ({
          headerMode: 'screen',
          headerBackTitleVisible: false,
          headerStyle: { elevation: 0, backgroundColor: colorCode.GREEN, },
          headerTitleAlign: 'left',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerTitleStyle: { fontSize: 18, fontFamily: "Muli-Bold", color: colorCode.WHITE },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}>
        <Stack.Screen
          name={screens.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.USER_DETAILS}
          component={UserDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.BUTTONS}
          component={Buttons}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { MainNavigator };
