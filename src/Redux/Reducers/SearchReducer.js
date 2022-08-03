const initialState = {
  search: [],
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHED_MANGA':
      return {search: [...action.payload]};
      break;
    default:
      return state;
  }
};

export default SearchReducer;
