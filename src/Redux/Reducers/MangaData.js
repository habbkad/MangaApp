const initialState = {
  mangDeds: [],
  manga: [],
};

const MangaData = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MANGA_DATA':
      return {mangDeds: [...action.payload]};
    case 'ADD_MANGA':
      return {manga: [...action.payload]};

    default:
      return state;
  }
};

export default MangaData;
