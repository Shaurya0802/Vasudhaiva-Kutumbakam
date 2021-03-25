import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import {FirstAppDrawerNavigator} from './components/FirstAppDrawerNavigator';
import {SecondAppDrawerNavigator} from './components/SecondAppDrawerNavigator';
import {SecondAppTabNavigator} from './components/SecondAppTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  SecondDrawer: {screen: SecondAppDrawerNavigator},
  FirstDrawer: {screen: FirstAppDrawerNavigator}
});

const AppContainer = createAppContainer(switchNavigator);