import uuid from 'uuid/v4';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKLIST':
      console.log(action);
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid()
        }
      ];
    case 'REMOVE_BOOK':
      console.log(action.id);
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
