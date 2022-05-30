import React from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  Text,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MangaView from './MangaView';
import light from '../TextStyle/Text';

const MangaSecList = () => {
  const {isekai} = useSelector(state => state.MangaGenre);
  const {actionManga} = useSelector(state => state.MangaGenre);
  const {comedy} = useSelector(state => state.MangaGenre);
  const {romance} = useSelector(state => state.MangaGenre);

  //     const {actionManga} = useSelector(state => {
  //       state.MangaGenre;
  //     });
  //   const {comedy} = useSelector(state => {
  //     state.MangaGenre;
  //   });
  //   const {romance} = useSelector(state => {
  //     state.MangaGenre;
  //   });
  //   const {isekai} = useSelector(state => {
  //     state.MangaGenre;
  //   });

  const DATA = [
    {
      title: 'Acttion',
      data: isekai,
    },
    {
      title: 'Comedy',
      data: actionManga.slice(null, 10),
    },
    {
      title: 'Romance',
      data: isekai,
    },
    {
      title: 'Isekai',
      data: isekai,
    },
  ];

  return (
    <View>
      <ScrollView>
        <FlatList
          data={actionManga}
          renderItem={({item}) => <MangaView data={item} />}
          horizontal
        />
        <FlatList
          data={comedy}
          renderItem={({item}) => <MangaView data={item} />}
          horizontal
        />
        <FlatList
          data={romance}
          renderItem={({item}) => <MangaView data={item} />}
          horizontal
        />
        <FlatList
          data={isekai}
          renderItem={({item}) => <MangaView data={item} />}
          horizontal
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MangaSecList;
