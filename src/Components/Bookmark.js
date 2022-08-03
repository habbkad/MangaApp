import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import light from '../TextStyle/Text';

const Bookmark = props => {
  const {attributes} = props.manga.item;
  const {description} = attributes;
  const {en} = attributes.title;
  console.log(description);
  return (
    <View>
      <Text style={light.text}>kjbdfjkbd</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Bookmark;
