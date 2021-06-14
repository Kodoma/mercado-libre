import { City2, Country2, Prices, State2, Value } from './meli.items.models';
import { Description, Picture, SaleTerm } from './meli.item.models';

export interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
}

export interface ValueStruct {
  number: number;
  unit: string;
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Country2;
  state: State2;
  city: City2;
  latitude: string;
  longitude: string;
}

export interface Attribute {
  value_struct: ValueStruct;
  values: Value[];
  attribute_group_id: string;
  attribute_group_name: string;
  id: string;
  name: string;
  value_name: string;
  value_id: string;
  source: any;
}

export interface DifferentialPricing {
  id: number;
}

export interface MeliItemResponse {
  id: string;
  site_id: string;
  title: string;
  subtitle?: any;
  seller_id?: number;
  category_id: string;
  official_store_id?: any;
  price: number;
  prices?: Prices;
  base_price?: number;
  original_price?: any;
  currency_id: string;
  initial_quantity?: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms?: SaleTerm[];
  buying_mode: string;
  listing_type_id: string;
  start_time?: string;
  stop_time?: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail?: string;
  pictures?: Picture[];
  video_id?: any;
  descriptions?: Description[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods?: any[];
  shipping: Shipping;
  international_delivery_mode?: string;
  seller_address?: SellerAddress;
  seller_contact?: any;
  location?: any;
  coverage_areas?: any[];
  attributes?: Attribute[];
  warnings?: any[];
  listing_source?: string;
  variations?: any[];
  status?: string;
  sub_status?: any[];
  tags: string[];
  warranty?: string;
  catalog_product_id?: string;
  domain_id: string;
  parent_item_id?: any;
  differential_pricing?: DifferentialPricing;
  deal_ids?: any[];
  automatic_relist?: boolean;
  date_created?: string;
  last_updated?: string;
  health?: any;
  catalog_listing?: boolean;
  channels?: string[];
}

export * from './meli.item.models';
export * from './meli.items.models';
