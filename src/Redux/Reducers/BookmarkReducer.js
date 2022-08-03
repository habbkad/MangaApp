const initialState = {
  bookmarked: [],
};

const BookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_MARK':
      return {bookmarked: [...state.bookmarked, action.payload]};

    default:
      return state;
  }
};

export default BookmarkReducer;
