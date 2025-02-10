import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {GetChapImages} from '../MangaAPI/GetChapImages';
import {Dimensions} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

const ChapterImages = ({route}) => {
  const [chapImages, setChapImages] = useState([]);
  const [hash, setHash] = useState('');
  const win = Dimensions.get('window');
  const ratio = win.width / 200;
  useEffect(() => {
    const getImages = async () => {
      const images = await GetChapImages(
        `https://api.mangadex.org/at-home/server/${route.params.chapDeds}`,
      );

      const {data} = images;
      setChapImages([...data]);
      setHash(images.hash);

      console.log(images);
    };
    getImages();
  }, []);
  console.log(hash);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chapImages}
        data={chapImages}
        renderItem={({item}) => (
          <ImageLoad
            style={{
              height: 300 * ratio,
              width: Dimensions.get('window').width,
              marginTop: 3,
            }}
            placeholderSource={{
              uri: 'https://media.tenor.com/AKHj5e7v4pcAAAAj/cute.gif',
            }}
            loadingStyle={{}}
            source={{
              uri: `https://uploads.mangadex.org/data/${hash}/${item}`,
            }}
          />
          // <Image
          //   style={{
          //     height: 300 * ratio,
          //     width: Dimensions.get('window').width,
          //     marginTop: 3,
          //   }}
          //   source={{uri: `https://uploads.mangadex.org/data/${hash}/${item}`}}

          // />
        )}
      />
      <View style={styles.controls}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  chapImages: {
    flex: 9,
  },
  controls: {
    flex: 0.1,
  },
});

export default ChapterImages;
