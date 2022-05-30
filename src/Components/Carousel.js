import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector} from 'react-redux';

const Carousel = () => {
  const {manga} = useSelector(state => state.MangaData);
  //console.log(manga[0].image);
  const [images, setImages] = useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <SliderBox images={images} sliderBoxHeight={300} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  carousel: {
    flex: 5,
  },
});

export default Carousel;
