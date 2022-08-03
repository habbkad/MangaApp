import axios from 'axios';
import {GetFunc} from '../MangaAPI/GetFunc';

export const ChapterIds = async id => {
  let eachChap = [];
  try {
    const chapters = await GetFunc(
      `https://api.mangadex.org/manga/${id}/aggregate`,
    );
    const {volumes} = chapters;
    // console.log(volumes);
    // for (let i of volumes) {
    //   console.log(i);
    // }

    for (key in volumes) {
      //console.log(volumes[key]);
      const {chapters} = volumes[key];
      //console.log(chapters);
      for (chap in chapters) {
        //console.log(chapters[chap]);
        const {chapter} = chapters[chap];
        const {id} = chapters[chap];
        //console.log(id);

        const eachChapter = {
          chapter,
          id,
        };
        eachChap.push(eachChapter);
      }
    }
    //console.log(chapters);
    return eachChap;
  } catch (error) {
    console.log(error);
  }
  //console.log(eachChap);
};
