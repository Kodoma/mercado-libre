export interface Author {
    name: string;
    lastname: string;
}

export interface Item {
    id: string;
    title: string;
    price: Price;
    thumbnail: string
    pictures: Pictures[];
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}

export interface Pictures {
    src: string;
}

export interface Price {
    amount: string;
    currency: string;
}

export interface Items {
    author: Author;
    categories: string[];
    items: Item[];
}