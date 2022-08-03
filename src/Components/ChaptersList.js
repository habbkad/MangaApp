import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {ChapterIds} from '../hooks/UseChapters';
import light from '../TextStyle/Text';
import ChapterView from './Chapter';

const ChaptersList = props => {
  const [chapter, setChapter] = useState([]);
  console.log(props.mangaId);
  useEffect(() => {
    const getData = async () => {
      const chap = await ChapterIds(props.mangaId);
      //console.log(chap);
      setChapter([...chap]);
    };
    getData();
  }, []);
  //console.log(chapter);

  return (
    <View style={styles.container}>
      <FlatList
        data={chapter}
        renderItem={({item}) => <ChapterView chapters={item} />}
        style={styles.imageList}
      />
      <View style={styles.controls}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  imageList: {
    flex: 9,
    marginBottom: 20,
  },
  controls: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ChaptersList;
