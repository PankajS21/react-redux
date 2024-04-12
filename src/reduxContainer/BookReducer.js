import { buy_books } from "./ActionCreator";

const initialState = {
  NumberOfBooks: 100,
};

//Syntax:-

// const reducer=(initialState,action)=>{

// }

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_books:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 10,
      };
    default:
      return state;
  }
};

export default BookReducer;
