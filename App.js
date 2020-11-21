import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import {FirstAppDrawerNavigator} from './components/FirstAppDrawerNavigator';
import {SecondAppDrawerNavigator} from './components/SecondAppDrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  FirstDrawer: {screen: FirstAppDrawerNavigator},
  SecondDrawer: {screen: SecondAppDrawerNavigator}
});

const AppContainer = createAppContainer(switchNavigator);