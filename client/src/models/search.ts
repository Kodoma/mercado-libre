export interface Search {
    q: string;
    suggested_queries: SuggestedQuery[];
}

export interface SuggestedQuery {
    q: string;
    match_start: number;
    match_end: number;
}

export interface Seller {
}

export interface Prices {
}

export interface Installments {
}

export interface Address {
}

export interface Shipping {
}

export interface SellerAddress {
}

export interface Result {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price?: any;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    address: Address;
    shipping: Shipping;
    seller_address: SellerAddress;
    attributes: any[];
    original_price?: any;
    category_id: string;
    official_store_id?: any;
    domain_id: string;
    catalog_product_id: string;
    tags: any[];
    catalog_listing: boolean;
    use_thumbnail_id: boolean;
    order_backend: number;
}