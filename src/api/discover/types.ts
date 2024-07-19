export type Book = {
  name: string;
  price: number;
  position?: number;
  genre?: string;
  reads?: number;
  image: string;
};

export type BookResponse = {
  title: string;
  isBanner?: boolean;
  isTop?: boolean;
  data: Book[];
}[];
