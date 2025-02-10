import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import Carousel from './Carousel';
import MangaSecList from './MangaSecList';
import MangaView from './MangaView';
import light from '../TextStyle/Text';
import {useSelector} from 'react-redux';
const HomeScrollView = props => {
  const manga = useSelector(state => state.MangaGenre);
  //console.log(manga.actionManga);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.carousel}>
          {/* <Carousel /> */}
          <MangaSecList navigation={props.navigation} />
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
