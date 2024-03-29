export const addMangaData = manga => {
  return {
    type: 'ADD_MANGA_DATA',
    payload: manga,
  };
};

export const addManga = data => {
  return {
    type: 'ADD_MANGA',
    payload: data,
  };
};

export const addActionGenre = manga => {
  return {
    type: 'ACTION',
    payload: manga,
  };
};

export const addComedyGenre = manga => {
  return {
    type: 'COMEDY',
    payload: manga,
  };
};
export const addRomanceGenre = manga => {
  return {
    type: 'ROMANCE',
    payload: manga,
  };
};
export const addIsekaiGenre = manga => {
  return {
    type: 'ISEKAI',
    payload: manga,
  };
};
