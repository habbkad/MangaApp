import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChaptersList from '../Components/ChaptersList';
import MoreManga from '../Components/MoreManga';
const Tab = createMaterialTopTabNavigator();
const TopNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Details" component={ChaptersList} />
      <Tab.Screen name="Detail" component={MoreManga} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TopNav;
