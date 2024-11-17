import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContextProvider from './AppStatusContext/AppContextProvider';
import DataContextProvider from './DataContext/DataContextProvider';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../Navigation/StackNavigation';
import NotificationModal from '../components/NotificationModal';
const AppProvider = () => {
  return (
    <AppContextProvider>
      <DataContextProvider>
        <NavigationContainer>
          <StackNavigation />
          <NotificationModal />
        </NavigationContainer>
      </DataContextProvider>
    </AppContextProvider>
  );
};

export default AppProvider;
