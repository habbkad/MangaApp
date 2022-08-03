import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import light from '../TextStyle/Text';
import {useNavigation} from '@react-navigation/native';

const MangaList = props => {
  const {attributes} = props.data;
  const {en} = attributes.title;
  const {image} = props.data;
  const {status} = attributes;

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <TouchableOpacity
          onPress={() => navigation.push('Details', {manga: props.data})}>
          <Image
            style={{height: 170, width: 115, borderRadius: 10}}
            source={{uri: image}}
          />
          <View style={styles.info}>
            <Text
              style={[light.text, styles.txt]}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {en}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  details: {
    //backgroundColor: '#121212',
    borderRadius: 5,
  },
  info: {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 5,
  },
  txt: {
    width: 110,
  },
});

export default MangaList;
