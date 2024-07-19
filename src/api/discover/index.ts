import { BOOK_LIST_MOCK } from "../../mock/bookList";
import { BookResponse } from "./types";

export const fetchBooks = (): BookResponse => {
  return BOOK_LIST_MOCK;
};
