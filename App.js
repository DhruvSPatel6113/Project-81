import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { CusomSideBar } from './components/CustomSideBar';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen'
import ExchangeScreen from './screens/ExchangeScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen : {screen : HomeScreen},
  ExchangeScreen : {screen : ExchangeScreen}
})

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    contentComponent: CusomSideBar,
  },
  {
    initialRouteName: 'Home',
  }
);

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer : {screen : Drawer},
  TabNavigator : {screen : TabNavigator}
});

const AppContainer = createAppContainer(switchNavigator);
