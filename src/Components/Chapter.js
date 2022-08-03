import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import light from '../TextStyle/Text';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const Chapter = props => {
  let chapNumber = props.chapters;
  const navigation = useNavigation();
  console.log(props.chapters);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Chapter}
        onPress={() => {
          navigation.push('chapterImages', {chapDeds: chapNumber.id});
        }}>
        <Text style={light.textTitle}> Chapter: {props.chapters.chapter}</Text>

        <Icon name="navigate-next" color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  Chapter: {
    flex: 5,
    flexDirection: 'row',
    borderWidth: 0.2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: 'white',
    justifyContent: 'space-between',
  },
  icon: {
    borderRadius: 13,
    backgroundColor: '#617877',
  },
});

export default Chapter;
