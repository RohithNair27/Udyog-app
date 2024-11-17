import {StyleSheet, Text, View, Switch} from 'react-native';
import React from 'react';
import Attendance from '../Screens/Attendance';
import LoginList from '../Screens/LoginList';
import OfflineOnline from '../components/OfflineOnline';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import About from '../Screens/About';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFC834',
          borderColor: 'transparent',
        },
        headerRight: () => <OfflineOnline />,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#FFC834',
        },
        headerTitle: '',
        headerTitleStyle: {fontSize: 25},
        tabBarItemStyle: {alignContent: 'center', justifyContent: 'center'},
        // tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
      }}>
      <Tab.Screen
        name="Udyog"
        component={Attendance}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({size, focused, color}) => (
            <Icon name="home" size={30} color={focused ? '#FFFF' : '#8e8e93'} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={LoginList}
        options={{
          // tabBarLabel: '',
          tabBarIcon: ({size, focused, color}) => (
            <Icon
              name="list-ul"
              size={25}
              color={focused ? '#FFFF' : '#8e8e93'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
