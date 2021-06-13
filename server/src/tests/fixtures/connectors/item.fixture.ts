import {
  Attribute,
  Description, DifferentialPricing, Location,
  MeliItemResponse,
  MeliSearchResponse,
  Picture,
  Prices,
  SaleTerm, SellerAddress,
  Shipping
} from "../../../connectors/models";

function buildFn<T>(model: T): (override?: Partial<T>) => T {
  return (override?: Partial<T>) => ({
    ...model,
    ...override
  });
}

const createItemResponse: MeliItemResponse = {
  id: "MLA922358125",
  site_id: "MLA",
  title: "Apple iPhone 11 (64 Gb) - (product)red",
  subtitle: null,
  seller_id: 69848434,
  category_id: "MLA1055",
  official_store_id: null,
  price: 149000,
  base_price: 149000,
  original_price: null,
  currency_id: "ARS",
  initial_quantity: 1,
  available_quantity: 1,
  sold_quantity: 0,
  sale_terms: [],
  buying_mode: "buy_it_now",
  listing_type_id: "gold_special",
  start_time: "2021-05-26T01:22:45.000Z",
  stop_time: "2041-05-20T04:00:00.000Z",
  condition: "new",
  permalink: "https://articulo.mercadolibre.com.ar/MLA-922358125-apple-iphone-11-64-gb-productred-_JM",
  thumbnail_id: "960745-MLA46114990453_052021",
  thumbnail: "http://http2.mlstatic.com/D_960745-MLA46114990453_052021-I.jpg",
  secure_thumbnail: "https://http2.mlstatic.com/D_960745-MLA46114990453_052021-I.jpg",
  pictures: [],
  video_id: null,
  descriptions: [
    {
      id: "MLA922358125-3490711845"
    }
  ],
  accepts_mercadopago: true,
  non_mercado_pago_payment_methods: [
  ],
  shipping: {
    mode: "me2",
    tags: [
      "mandatory_free_shipping"
    ],
    free_shipping: true,
    logistic_type: "drop_off",
    store_pick_up: false
  },
  international_delivery_mode: "none",
  seller_contact: null,
  location: {
  },
  coverage_areas: [
  ],
  attributes: [],
  warnings: [
  ],
  listing_source: "",
  variations: [
  ],
  status: "paused",
  sub_status: [
  ],
  tags: [
    "good_quality_picture",
    "immediate_payment",
    "cart_eligible"
  ],
  warranty: "Sin garantía",
  catalog_product_id: "MLA15149566",
  domain_id: "MLA-CELLPHONES",
  parent_item_id: null,
  differential_pricing: null,
  deal_ids: [
  ],
  automatic_relist: false,
  date_created: "2021-05-26T01:22:46.000Z",
  last_updated: "2021-06-06T20:25:15.390Z",
  health: null,
  catalog_listing: true,
  channels: [
    "marketplace"
  ]
}

export const buildItemResponse = buildFn(createItemResponse)

const createItemsListResponse: MeliSearchResponse = {
  site_id: "MLA",
  query: "iphone",
  paging: {
    total: 23136,
    primary_results: 1000,
    offset: 0,
    limit: 50
  },
  results: [
    {
      id: "MLA924208469",
      site_id: "MLA",
      title: "Apple iPhone 11 (128 Gb) - Negro",
      category_id: "MLA1055",
      price: 165000,
      original_price: null,
      currency_id: "ARS",
      available_quantity: 1,
      sold_quantity: 0,
      buying_mode: "buy_it_now",
      listing_type_id: "gold_special",
      stop_time: "2041-06-01T04:00:00.000Z",
      condition: "new",
      permalink: "https://www.mercadolibre.com.ar/apple-iphone-11-128-gb-negro/p/MLA15149567",
      thumbnail: "http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg",
      thumbnail_id: "865864-MLA46114990464_052021",
      accepts_mercadopago: true,
      shipping: {
        free_shipping: true,
        mode: "me2",
        tags: [
          "mandatory_free_shipping"
        ],
        logistic_type: "xd_drop_off",
        store_pick_up: false
      },
      seller_address: {
        id: "",
        comment: "",
        address_line: "",
        zip_code: "",
        country: {
          id: "AR",
          name: "Argentina"
        },
        state: {
          id: "AR-C",
          name: "Capital Federal"
        },
        city: {
          id: "TUxBQkJFTDcyNTJa",
          name: "Belgrano"
        },
        latitude: "",
        longitude: ""
      },
      tags: [
        "good_quality_picture",
        "immediate_payment",
        "cart_eligible",
        "best_seller_candidate"
      ],
      domain_id: "MLA-CELLPHONES",
      official_store_id: null,
      catalog_product_id: "MLA15149567",
    }
  ],
  secondary_results: [
  ],
  related_results: [
  ],
  sort: {
    id: "relevance",
    name: "More relevant"
  },
  available_sorts: [
    {
      id: "price_asc",
      name: "Lower price"
    },
    {
      id: "price_desc",
      name: "Higher price"
    }
  ],
  filters: [
    {
      id: "category",
      name: "Categories",
      type: "text",
      values: [
        {
          id: "MLA1055",
          name: "Celulares y Smartphones",
          path_from_root: [
            {
              id: "MLA1051",
              name: "Celulares y Teléfonos"
            },
            {
              id: "MLA1055",
              name: "Celulares y Smartphones"
            }
          ]
        }
      ]
    }
  ],
  available_filters: []
}

export const buildItemsListResponse = buildFn(createItemsListResponse)
