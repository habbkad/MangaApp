import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import BookmarkedList from '../Components/BookmarkedList';

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <BookmarkedList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default NotificationScreen;
