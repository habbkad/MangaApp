import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  DarkTheme,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Search from '../Screens/Search';
import Profile from '../Screens/ProfileScreen';
import Notification from '../Screens/NotificationScreen';
import {Appearance} from 'react-native';

const Tab = createBottomTabNavigator();

const ButtomTabNavigation = () => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ButtomTabNavigation;
