import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import MangaView from './MangaView';
import light from '../TextStyle/Text';
import {Text} from 'react-native';

const SearchedManga = () => {
  const {search} = useSelector(state => state.SearchReducer);
  useEffect(() => {
    const check = () => {
      if (!search) {
        return (
          <Text
            style={[
              light.text,
              {color: 'white', fontSize: 20, fontWeight: 'bold'},
            ]}>
            Not Found!
          </Text>
        );
      }
    };
    check();
  }, [search]);

  return (
    <>
      {search ? (
        <FlatList
          data={search}
          renderItem={({item}) => <MangaView data={item} genre={'Isekai'} />}
          numColumns={3}
        />
      ) : (
        <Text
          style={{flex: 1, color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Not Found!
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errCon: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchedManga;
