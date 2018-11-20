import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import {colors} from './app/components/_base'
import HomeScreen from './app/components/screens/HomeScreen';
import CategoriesScreen from './app/components/screens/CategoriesScreen';
import CategoryScreen from './app/components/screens/CategoryScreen';
import BookScreen from './app/components/screens/BookScreen';

export default StackNavigator(
  {
    Home:{
      screen: HomeScreen
    },
    Categories:{
      screen: CategoriesScreen
    },
    Category:{
      screen: CategoryScreen
    },
    Book:{
      screen: BookScreen
    }
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