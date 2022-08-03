import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import MangaList from './MangaList';
import light from '../TextStyle/Text';

const MoreManga = ({route}) => {
  const {manga} = route.params;
  const {genre} = route.params;

  console.log(manga);
  return (
    <View style={styles.container}>
      <Text style={[light.textTitle, styles.txt]}>{genre}</Text>

      <FlatList
        data={manga}
        renderItem={({item}) => <MangaList data={item} genre={genre} />}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    padding: 15,
    fontSize: 25,
  },
});

export default MoreManga;
