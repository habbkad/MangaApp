import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import light from '../TextStyle/Text';
import {ChapterIds} from '../hooks/UseChapters';
import ChaptersList from './ChaptersList';
import {Icon} from 'react-native-elements';
import TopNav from '../Navigation/TopNav';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {addBookmark} from '../Redux/Actions/AddMangaData';

const EachMangaDetails = props => {
  const manga = props.manga;
  const {attributes} = props.manga;
  const {description} = attributes;
  const {en} = attributes.title;
  const desc = description.en;

  const [iconColor, setIconColor] = useState('white');
  const dispatch = useDispatch();

  const bookmark = e => {
    e.preventDefault();
    iconColor == 'white' ? setIconColor('#037bfc') : setIconColor('white');
    console.log(manga);

    dispatch(addBookmark(manga));
  };

  //console.log(manga.id);

  // useEffect(() => {
  //   const chapter = async () => {
  //     const chap = await ChapterIds(manga.id);
  //     console.log(chap);
  //   };
  //   chapter();
  // }, []);

  return (
    <View>
      <View style={styles.detailsContainer}>
        <View>
          <Image
            style={{height: 170, width: 115, borderRadius: 10}}
            source={{uri: manga.image}}
          />
        </View>
        <View style={styles.details}>
          <Text style={light.textTitle} numberOfLines={2}>
            {en}
          </Text>
          <Text style={light.text} numberOfLines={4}>
            {desc}
          </Text>
          <View style={styles.bookmark}>
            <Icon
              name="bookmark"
              color={iconColor}
              type="material"
              size={30}
              onPress={bookmark}
            />
          </View>
        </View>

        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  details: {
    flex: 5,
    paddingLeft: 20,
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  bookmark: {
    flex: 2,
    marginTop: 130,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});

export default EachMangaDetails;