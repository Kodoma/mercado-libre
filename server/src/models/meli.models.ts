export interface MeliSearchResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  thumbnail: string;
  pictures?: Pictures[];
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals?: number;
}

export interface MeliItemResponse {
  author: Author;
  item: Item;
}

export interface Pictures {
  src: string;
}
