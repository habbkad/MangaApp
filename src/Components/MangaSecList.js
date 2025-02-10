import React from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MangaView from './MangaView';
import light from '../TextStyle/Text';
import {useNavigation} from '@react-navigation/native';

const MangaSecList = () => {
  const {manga} = useSelector(state => state.MangaData);
  const {isekai} = useSelector(state => state.MangaGenre);
  const {actionManga} = useSelector(state => state.MangaGenre);
  const {comedy} = useSelector(state => state.MangaGenre);
  const {romance} = useSelector(state => state.MangaGenre);
  //console.log(manga.manga);
  const DATA = [
    // {
    //   title: 'Acttion',
    //   data: actionManga.slice(0, 10),
    // },
    // {
    //   title: 'Comedy',
    //   data: comedy.slice(0, 10),
    // },
    // {
    //   title: 'Romance',
    //   data: romance.slice(0, 10),
    // },
    // {
    //   title: 'Isekai',
    //   data: isekai.slice(0, 10),
    // },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flex: 2.5}}>
        <View style={styles.mangaTitle}>
          <Text style={light.textTitle}>Action</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.push('MoreManga', {
                manga: actionManga,
                genre: 'Action',
              })
            }>
            <Text style={[light.text, {marginTop: 5}]}>See more...</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={actionManga.slice(0, 10)}
          renderItem={({item}) => (
            <MangaView data={item} style={styles.list} genre={'Action'} />
          )}
          horizontal
        />
      </View>

      <View style={{flex: 2.5}}>
        <View style={styles.mangaTitle}>
          <Text style={light.textTitle}>Comedy</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.push('MoreManga', {manga: comedy, genre: 'Comedy'})
            }>
            <Text style={[light.text, {marginTop: 5}]}>See more...</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={comedy.slice(0, 10)}
          renderItem={({item}) => <MangaView data={item} genre={'Comedy'} />}
          horizontal
        />
      </View>

      <View style={{flex: 2.5}}>
        <View style={styles.mangaTitle}>
          <Text style={light.textTitle}>Romance</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.push('MoreManga', {manga: romance, genre: 'Romance'})
            }>
            <Text style={[light.text, {marginTop: 5}]}>See more...</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={romance.slice(0, 10)}
          renderItem={({item}) => <MangaView data={item} genre={'Romance'} />}
          horizontal
        />
      </View>

      <View style={{flex: 2.5}}>
        <View style={styles.mangaTitle}>
          <Text style={light.textTitle}>Isekai</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.push('MoreManga', {manga: isekai, genre: 'Isekai'})
            }>
            <Text style={[light.text, {marginTop: 5}]}>See more...</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={isekai.slice(0, 10)}
          renderItem={({item}) => <MangaView data={item} genre={'Isekai'} />}
          horizontal
        />
      </View>

      <View style={{flex: 2.5}}>
        <View style={styles.mangaTitle}>
          <Text style={light.textTitle}>All manga</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.push('MoreManga', {manga: manga, genre: 'All manga'})
            }>
            <Text style={[light.text, {marginTop: 5}]}>See more...</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={manga.slice(0, 10)}
          renderItem={({item}) => <MangaView data={item} genre={'All manga'} />}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    justifyContent: 'space-between',
  },
  mangaTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MangaSecList;
