import React from 'react';
import {FlatList, Text} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Bookmark from './Bookmark';
import light from '../TextStyle/Text';

const BookmarkedList = () => {
  const {bookmarked} = useSelector(state => state.BookmarkReducer);
  console.log(':::::::::::', bookmarked);

  return (
    <View style={styles.container}>
      <Text
        style={[
          light.textTitle,
          {fontSize: 25, marginVertical: 10, fontWeight: 'bold'},
        ]}>
        Bookmarked
      </Text>
      <FlatList
        data={bookmarked}
        renderItem={item => <Bookmark manga={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BookmarkedList;
