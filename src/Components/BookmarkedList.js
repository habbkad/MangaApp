import React from 'react';
import {FlatList} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Bookmark from './Bookmark';

const BookmarkedList = () => {
  const {bookmarked} = useSelector(state => state.BookmarkReducer);
  console.log(bookmarked);

  return (
    <View>
      <FlatList
        data={bookmarked}
        renderItem={item => <Bookmark manga={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookmarkedList;
