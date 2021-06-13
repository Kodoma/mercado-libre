import { MeliItemResponse } from "./index";

export interface MeliSearchResponse {
  site_id: string;
  query: string;
  paging: Paging;
  results: MeliItemResponse[];
  secondary_results: any[];
  related_results: any[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Ratings {
  negative: number;
  positive: number;
  neutral: number;
}

export interface Transactions {
  total: number;
  canceled: number;
  period: string;
  ratings: Ratings;
  completed: number;
}

export interface Excluded {
  real_rate: number;
  real_value: number;
}

export interface Claims {
  rate: number;
  value: number;
  period: string;
  excluded: Excluded;
}

export interface Excluded2 {
  real_rate: number;
  real_value: number;
}

export interface DelayedHandlingTime {
  rate: number;
  value: number;
  period: string;
  excluded: Excluded2;
}

export interface Sales {
  period: string;
  completed: number;
}

export interface Excluded3 {
  real_rate: number;
  real_value: number;
}

export interface Cancellations {
  rate: number;
  value: number;
  period: string;
  excluded: Excluded3;
}

export interface Metrics {
  claims: Claims;
  delayed_handling_time: DelayedHandlingTime;
  sales: Sales;
  cancellations: Cancellations;
}

export interface SellerReputation {
  transactions: Transactions;
  power_seller_status: string;
  metrics: Metrics;
  level_id: string;
  protection_end_date?: Date;
  real_level: string;
}

export interface EshopRubro {
  id: string;
  name: string;
  category_id: string;
}

export interface State {
  id: string;
}

export interface Neighborhood {
  id?: any;
}

export interface Country {
  id: string;
}

export interface City {
  id: string;
}

export interface EshopLocation {
  state: State;
  neighborhood: Neighborhood;
  country: Country;
  city: City;
}

export interface Eshop {
  nick_name: string;
  eshop_rubro: EshopRubro;
  eshop_id: number;
  eshop_locations: EshopLocation[];
  site_id: string;
  eshop_logo_url: string;
  eshop_status_id: number;
  seller: number;
  eshop_experience: number;
}

export interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  seller_reputation: SellerReputation;
  eshop: Eshop;
}

export interface Conditions {
  context_restrictions: any[];
  start_time?: any;
  end_time?: any;
  eligible: boolean;
}

export interface Metadata {
}

export interface Price {
  id: string;
  type: string;
  conditions: Conditions;
  amount: number;
  regular_amount?: any;
  currency_id: string;
  exchange_rate_context: string;
  metadata: Metadata;
  last_updated: string;
}

export interface Presentation {
  display_currency: string;
}

export interface Conditions2 {
  context_restrictions: any[];
  start_time: Date;
  end_time: Date;
  eligible: boolean;
}

export interface ReferencePrice {
  id: string;
  type: string;
  conditions: Conditions2;
  amount: number;
  currency_id: string;
  exchange_rate_context: string;
  tags: any[];
  last_updated: Date;
}

export interface Prices {
  id: string;
  prices: Price[];
  presentation: Presentation;
  payment_method_prices: any[];
  reference_prices: ReferencePrice[];
  purchase_discounts: any[];
}

export interface Country2 {
  id: string;
  name: string;
}

export interface State2 {
  id: string;
  name: string;
}

export interface City2 {
  id: string;
  name: string;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Value {
  id: string;
  name: string;
  struct: Struct;
  source: any;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface Value2 {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

export interface Value3 {
  id: string;
  name: string;
  results: number;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value3[];
}


