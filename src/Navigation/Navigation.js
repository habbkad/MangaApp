import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import ButtomTabNavigation from './ButtomTabNavigation';
import {Appearance} from 'react-native';
import MoreManga from '../Components/MoreManga';
import DetailsPage from '../Components/DetailsPage';
import ChaptersList from '../Components/ChaptersList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChapterImages from '../Components/ChapterImages';

const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScren"
          component={ButtomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MoreManga"
          component={MoreManga}
          options={{headerTitle: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsPage}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="chapterImages"
          component={ChapterImages}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
