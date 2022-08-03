import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import {searchResults} from '../Redux/Actions/AddMangaData';

import {search} from '../hooks/useSearch';
import SearchedManga from '../Components/SearchedManga';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const dispatch = useDispatch();
  const searchManga = async () => {
    const result = await search(searchTitle);
    dispatch(searchResults(result));
  };

  return (
    <SafeAreaView style={[{flex: 10}, styles.container]}>
      <View accessibilityRole="search" style={styles.search}>
        <Icon
          name="search"
          color="#dddddd"
          style={styles.icon}
          onPress={searchManga}
        />

        <TextInput
          style={styles.searchInput}
          value={searchTitle}
          onChangeText={text => {
            setSearchTitle(text);
          }}
          inlineImageLeft="search_icon"
        />
      </View>
      <View>
        <SearchedManga />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    color: '#dddddd',
    fontSize: 15,
    borderRadius: 23,
    backgroundColor: '#3e3e42',
    paddingLeft: 10,
    width: '70%',
    height: Platform.OS === 'android' ? 35 : 30,
  },
  icon: {
    padding: 6,
  },
});

export default Search;
