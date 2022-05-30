const initialState = {
  mangDeds: [],
  manga: [],
};

const MangaData = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MANGA_DATA':
      return {...state, mangDeds: action.payload};
    case 'ADD_MANGA':
      return {...state, manga: action.payload};

    default:
      return state;
  }
};

export default MangaData;
