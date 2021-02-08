import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// include the routes for the project
const navigator = createStackNavigator(
  {
    // key can be any name we give for navigation value is screen
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    // default route when application starts
    // value refers to the screen
    initialRouteName: 'Search',
    // options for screens
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
