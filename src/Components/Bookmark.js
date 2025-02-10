import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import light from '../TextStyle/Text';
import {useNavigation} from '@react-navigation/native';

const Bookmark = props => {
  const {attributes} = props.manga.item;
  const {description} = attributes;
  const {en} = attributes.title;
  console.log(attributes.lastChapter);
  const image = props.manga.item.image;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Details', {manga: props.manga.item})}>
      <View style={styles.pic}>
        <Image source={{uri: image}} style={styles.img} />
      </View>
      <View style={styles.textCon}>
        <Text style={[light.textTitle]} numberOfLines={1}>
          {attributes.title.en}
        </Text>
        <View>
          <Text
            style={[light.text, {width: 240, marginTop: 20, fontWeight: '700'}]}
            numberOfLines={2}>
            Description:
          </Text>
          <Text style={[light.text, {width: 240}]} numberOfLines={2}>
            {description.en ? description.en : 'None'}
          </Text>
        </View>

        <View style={styles.chapCon}>
          <Text
            style={[light.text, {width: 70, fontWeight: '700'}]}
            numberOfLines={2}>
            Chapters:
          </Text>
          <Text style={[light.text, {width: 240}]} numberOfLines={2}>
            {attributes.lastChapter ? attributes.lastChapter : 'chaps'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  pic: {
    flex: 3,
  },
  textCon: {
    flex: 7,
    marginLeft: 10,
  },
  img: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
  chapCon: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default Bookmark;
