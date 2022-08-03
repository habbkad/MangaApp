import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {connect, useSelector} from 'react-redux';
import useManga from '../hooks/useManga';
import HomeScrollView from '../Components/HomeScrollView';

const HomeScreen = props => {
  const {getManga} = useManga();
  //console.log(props);
  const {isekai} = useSelector(state => state.MangaGenre);
  //  console.log(isekai);
  const {mangDeds} = useSelector(state => state.MangaData);
  //console.log(mangDeds);
  const {manga} = useSelector(state => state.MangaData);
  //console.log(manga);

  useEffect(() => {
    getManga();
  }, []);

  return <HomeScrollView navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  carousel: {
    flex: 4,
  },
});

export default HomeScreen;
