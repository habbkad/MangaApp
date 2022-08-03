import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import MangaView from './MangaView';

const SearchedManga = () => {
  const {search} = useSelector(state => state.SearchReducer);
  console.log(search);
  return (
    <View>
      <FlatList
        data={search}
        renderItem={({item}) => <MangaView data={item} genre={'Isekai'} />}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchedManga;
