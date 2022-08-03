const initialState = {
  actionManga: [],
  comedy: [],
  romance: [],
  isekai: [],
};

const ManagaGenre = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      const actionManga = [...action.payload, ...state.actionManga];
      const actArr = actionManga.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      );

      return {...state, actionManga: [...actArr]};
    case 'COMEDY':
      const comedyManga = [...action.payload, ...state.comedy];
      const comArr = comedyManga.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      );

      return {...state, comedy: [...comArr]};
    case 'ROMANCE':
      const romanceManga = [...action.payload, ...state.romance];
      const romArr = romanceManga.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      );
      return {...state, romance: [...romArr]};
    case 'ISEKAI':
      const isekaiManga = [...action.payload, ...state.isekai];
      const isArr = isekaiManga.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      );
      return {...state, isekai: [...isArr]};
    default:
      return state;
  }
};

export default ManagaGenre;
