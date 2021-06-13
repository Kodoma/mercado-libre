export interface SaleTerm {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  value_struct?: any;
  values: any[];
}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface Description {
  id: string;
}

export interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}

export interface ItemDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: Snapshot;
}
