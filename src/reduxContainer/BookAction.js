import { buy_books } from "./ActionCreator";

export const purchase_book = () => {
  return {
    type: buy_books,
  };
};
