import {useEffect} from 'react';
import {GetFunc} from '../MangaAPI/GetFunc';
import {useDispatch} from 'react-redux';
import {
  addMangaData,
  addManga,
  addActionGenre,
  addComedyGenre,
  addIsekaiGenre,
  addRomanceGenre,
} from '../Redux/Actions/AddMangaData';
import axios from 'axios';
import {GetList} from '../MangaAPI/GetList';
import moment from 'moment';
let date =
  moment().subtract(12, 'hours').toISOString().slice(0, -11) + ':00:00';

export default () => {
  const dispatch = useDispatch();

  console.log(date);

  const getManga = async () => {
    try {
      const manga = await GetFunc(
        `https://api.mangadex.org/manga?order%5BlatestUploadedChapter%5D=desc`,
        {
          limit: '100',
          updatedAtSince: date,
          includedTagsMode: 'AND',
          includedTagsMode: 'OR',
          contentRating: ['safe', 'suggestive', 'erotica'],
          availableTranslatedLanguage: ['en'],
          hasAvailableChapters: 'true',
          excludedOriginalLanguage: ['fr', 'ar', 'es', 'ko', 'id', 'ru'],
        },
      );
      const {data} = manga;

      let mangaList = [];

      for (let item of data) {
        // console.log(item);
        if (item == undefined) continue;
        const {relationships} = item;
        if (item.relationships[2] === undefined) continue;
        const {id} = relationships[2];
        const {id: mangaId} = item;

        const {data: response} = await GetList(
          `https://api.mangadex.org/cover/${id}`,
        );

        if (response == undefined) continue;

        const {fileName} = response.attributes;
        const image = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}.512.jpg`;
        const newData = {...item, image: image};
        mangaList = [...mangaList, newData];
      }
      // console.log(mangaList);

      const action = mangaList.filter(manga => {
        const {tags} = manga.attributes;
        for (let tag of tags) {
          const {name} = tag.attributes;
          if (name.en === 'Action' && manga !== undefined) {
            return manga;
          }
        }
      });
      const comedy = mangaList.filter(manga => {
        const {tags} = manga.attributes;
        for (let tag of tags) {
          const {name} = tag.attributes;
          if (name.en === 'Comedy' && manga !== undefined) {
            return manga;
          }
        }
      });
      const romance = mangaList.filter(manga => {
        const {tags} = manga.attributes;
        for (let tag of tags) {
          const {name} = tag.attributes;
          if (name.en === 'Romance' && manga !== undefined) {
            return manga;
          }
        }
      });
      const isekai = mangaList.filter(manga => {
        const {tags} = manga.attributes;
        for (let tag of tags) {
          const {name} = tag.attributes;
          if (name.en === 'Isekai' && manga !== undefined) {
            return manga;
          }
        }
      });

      dispatch(addMangaData(data));
      dispatch(addManga(mangaList));
      dispatch(addActionGenre(action));
      dispatch(addComedyGenre(comedy));
      dispatch(addRomanceGenre(romance));
      dispatch(addIsekaiGenre(isekai));

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {getManga};
};
