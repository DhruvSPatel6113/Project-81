import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TabNavigator} from './BottomTabNavigator'
import {CustomSideBarMenu} from './CustomSideBar'
import SettingScreen from '../screens/SettingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
