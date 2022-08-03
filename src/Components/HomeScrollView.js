import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import Carousel from './Carousel';
import MangaSecList from './MangaSecList';
import MangaView from './MangaView';
import light from '../TextStyle/Text';

const HomeScrollView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.carousel}>
          <Carousel />
          <MangaSecList navigation={props.navigation} />
          <Text style={light.text}>knk</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  carousel: {
    flex: 4,
  },
});

export default HomeScrollView;
