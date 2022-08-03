import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import ChaptersList from './ChaptersList';
import EachMangaDetails from './EachMangaDetails';

const DetailsPage = ({route}) => {
  const {manga} = route.params;

  console.log(manga);
  return (
    <ScrollView style={styles.container}>
      <EachMangaDetails style={styles.detailsContainer} manga={manga} />

      <ChaptersList mangaId={manga.id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  detailsContainer: {
    flex: 4,
  },
});

export default DetailsPage;
