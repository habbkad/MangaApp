import {GetFunc} from '../MangaAPI/GetFunc';
import {useDispatch} from 'react-redux';
import {GetList} from '../MangaAPI/GetList';

export const search = async mangaTitle => {
  try {
    const search = await GetFunc(
      `https://api.mangadex.org/manga?order%5BlatestUploadedChapter%5D=desc`,
      {
        title: mangaTitle,
        includedTagsMode: 'AND',
        includedTagsMode: 'OR',
        contentRating: ['safe', 'suggestive', 'erotica'],
        availableTranslatedLanguage: ['en'],
        hasAvailableChapters: 'true',
        excludedOriginalLanguage: ['fr', 'ar', 'es', 'ko', 'id', 'ru'],
      },
    );

    const {data} = search;
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
    //console.log(mangaList);

    //console.log(data);
    return mangaList;
  } catch (error) {
    console.log(error);
  }
};
