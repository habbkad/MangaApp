const initialState = {
  actionManga: [],
  comedy: [],
  romance: [],
  isekai: [],
};

const ManagaGenre = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      return {...state, actionManga: action.payload};
    case 'COMEDY':
      return {...state, comedy: action.payload};
    case 'ROMANCE':
      return {...state, romance: action.payload};
    case 'ISEKAI':
      return {...state, isekai: action.payload};
    default:
      return state;
  }
};

export default ManagaGenre;
