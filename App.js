import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import {colors} from './app/components/_base'
import HomeScreen from './app/components/screens/HomeScreen';
import CategoriesScreen from './app/components/screens/CategoriesScreen';

export default StackNavigator(
  {
    Home:{
      screen: HomeScreen
    },
    Categories:{
      screen: CategoriesScreen
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions:{
      headerStyle:{
          backgroundColor: colors.primary
      },
      headerTintColor: colors.normaText,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);