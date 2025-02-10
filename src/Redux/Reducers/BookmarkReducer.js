const initialState = {
  bookmarked: [],
};

const BookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_MARK':
      return {bookmarked: [...state.bookmarked, action.payload]};

    case 'REMOVE_BOOK_MARK':
      const update = state.bookmarked.filter(a => a.id != action.payload.id);
      console.log(update);
      return {bookmarked: update};
    default:
      return state;
  }
};

export default BookmarkReducer;
