import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

const Search = () => {
  const {actionManga} = useSelector(state => state.MangaGenre);
  console.log(actionManga);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Search</Text>
        <FlatList
          data={actionManga}
          renderItem={({item}) => (
            <Image
              source={{uri: item.image}}
              style={{height: 200, width: 200}}
              alt="jbjk"
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Search;
