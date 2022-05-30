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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
