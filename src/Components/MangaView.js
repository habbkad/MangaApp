import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import light from '../TextStyle/Text';

const MangaView = props => {
  const {attributes} = props.data;
  const {en} = attributes.title;
  const {image} = props.data;
  console.log(image);
  return (
    <View>
      <Text style={light.text}>{en}</Text>
      <Image style={{height: 200, width: 200}} source={{uri: image}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MangaView;
