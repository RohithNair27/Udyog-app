import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DataContextProvider from './src/context/DataContext/DataContextProvider';
import StackNavigation from './src/Navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AppContextProvider from './src/context/AppStatusContext/AppContextProvider';
import AppProvider from './src/context/AppProvider';
const App = () => {
  return <AppProvider />;
};

export default App;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
});
