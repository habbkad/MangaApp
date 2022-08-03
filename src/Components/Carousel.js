import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector} from 'react-redux';

const Carousel = () => {
  const manga = useSelector(state => state.MangaGenre);
  // const random = Math.floor(Math.random() * manga.length);
  const [images, setImages] = useState([
    manga.actionManga[Math.floor(Math.random())].image,
    manga.comedy[Math.floor(Math.random())].image,
    manga.actionManga[Math.floor(Math.random())].image,
    manga.comedy[Math.floor(Math.random())].image,
    manga.isekai[1].image,
  ]);
  console.log(manga);
  if (!manga) {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1657602714211-36d812c2cdf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
          }}
          style={styles.image}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <SliderBox images={images} sliderBoxHeight={450} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  carousel: {
    flex: 5,
  },
  image: {
    height: 450,
    width: '100%',
  },
});

export default Carousel;
