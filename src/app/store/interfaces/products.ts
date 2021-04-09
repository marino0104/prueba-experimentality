export interface ProductsCategories {
  id:   string;
  name: string;
}

export interface ProductsItems {
  site_id:           SiteID;
  paging:            Paging;
  results:           Result[];
  secondary_results: any[];
  related_results:   any[];
  sort:              Sort;
  available_sorts:   Sort[];
  filters:           Filter[];
  available_filters: AvailableFilter[];
}

export interface AvailableFilter {
  id:     string;
  name:   string;
  type:   string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id:      string;
  name:    string;
  results: number;
}

export interface Sort {
  id:   string;
  name: string;
}

export interface Filter {
  id:     string;
  name:   string;
  type:   string;
  values: FilterValue[];
}

export interface FilterValue {
  id:             string;
  name:           string;
  path_from_root: Sort[];
}

export interface Paging {
  total:           number;
  primary_results: number;
  offset:          number;
  limit:           number;
}

export interface Result {
  id:                    string;
  site_id:               SiteID;
  title:                 string;
  seller:                Seller;
  price:                 number;
  prices:                Prices;
  sale_price:            null;
  currency_id:           CurrencyID;
  available_quantity:    number;
  sold_quantity:         number;
  buying_mode:           BuyingMode;
  listing_type_id:       ListingTypeID;
  stop_time:             Date;
  condition:             Condition;
  permalink:             string;
  thumbnail:             string;
  thumbnail_id:          string;
  accepts_mercadopago:   boolean;
  installments:          Installments;
  address:               Address;
  shipping:              Shipping;
  seller_address:        SellerAddress;
  attributes:            Attribute[];
  differential_pricing?: DifferentialPricing;
  original_price:        number | null;
  category_id:           string;
  official_store_id:     null;
  domain_id:             string;
  catalog_product_id:    null | string;
  tags:                  ResultTag[];
  order_backend:         number;
  use_thumbnail_id:      boolean;
}

export interface Address {
  state_id:   StateID;
  state_name: StateName;
  city_id:    string;
  city_name:  string;
}

export enum StateID {
  CoAnt = "CO-ANT",
  CoCal = "CO-CAL",
  CoCun = "CO-CUN",
  CoDc = "CO-DC",
  CoHui = "CO-HUI",
  CoSAN = "CO-SAN",
  CoVac = "CO-VAC",
}

export enum StateName {
  Antioquia = "Antioquia",
  BogotáDC = "Bogotá D.C.",
  Caldas = "Caldas",
  Cundinamarca = "Cundinamarca",
  Huila = "Huila",
  Santander = "Santander",
  ValleDelCauca = "Valle Del Cauca",
}

export interface Attribute {
  value_struct:         Struct | null;
  attribute_group_id:   AttributeGroupID;
  id:                   ID;
  name:                 Name;
  value_id:             null | string;
  value_name:           null | string;
  values:               AttributeValue[];
  attribute_group_name: AttributeGroupName;
  source:               number;
}

export enum AttributeGroupID {
  Empty = "",
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Empty = "",
  Otros = "Otros",
}

export enum ID {
  Brand = "BRAND",
  ItemCondition = "ITEM_CONDITION",
  Length = "LENGTH",
  Line = "LINE",
  Model = "MODEL",
  UnitsPerPackage = "UNITS_PER_PACKAGE",
}

export enum Name {
  CondiciónDelÍtem = "Condición del ítem",
  Largo = "Largo",
  Línea = "Línea",
  Marca = "Marca",
  Modelo = "Modelo",
  UnidadesPorEnvase = "Unidades por envase",
}

export interface Struct {
  unit:   string;
  number: number;
}

export interface AttributeValue {
  name:   null | string;
  struct: Struct | null;
  source: number;
  id:     null | string;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum Condition {
  New = "new",
}

export enum CurrencyID {
  Cop = "COP",
}

export interface DifferentialPricing {
  id: number;
}

export interface Installments {
  quantity:    number;
  amount:      number;
  rate:        number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface Prices {
  id?:                    string;
  prices?:                Price[];
  presentation?:          Presentation;
  payment_method_prices?: any[];
  reference_prices?:      any[];
  purchase_discounts?:    any[];
}

export interface Presentation {
  display_currency: CurrencyID;
}

export interface Price {
  id:                    string;
  type:                  Type;
  conditions:            Conditions;
  amount:                number;
  regular_amount:        number | null;
  currency_id:           CurrencyID;
  exchange_rate_context: ExchangeRateContext;
  metadata:              Metadata;
  last_updated:          Date | null;
}

export interface Conditions {
  context_restrictions: string[];
  start_time:           Date | null;
  end_time:             Date | null;
  eligible:             boolean;
}

export enum ExchangeRateContext {
  Default = "DEFAULT",
}

export interface Metadata {
  promotion_id?:   string;
  promotion_type?: PromotionType;
}

export enum PromotionType {
  Custom = "custom",
  Lightning = "lightning",
}

export enum Type {
  Promotion = "promotion",
  Standard = "standard",
}

export interface Seller {
  id:                 number;
  permalink:          null;
  registration_date:  null;
  car_dealer:         boolean;
  real_estate_agency: boolean;
  tags:               null;
}

export interface SellerAddress {
  id:           string;
  comment:      string;
  address_line: string;
  zip_code:     string;
  country:      Sort;
  state:        Sort;
  city:         Sort;
  latitude:     string;
  longitude:    string;
}

export interface Shipping {
  free_shipping: boolean;
  mode:          Mode;
  tags:          ShippingTag[];
  logistic_type: LogisticType;
  store_pick_up: boolean;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
  DropOff = "drop_off",
  Fulfillment = "fulfillment",
  XdDropOff = "xd_drop_off",
}

export enum Mode {
  Me2 = "me2",
}

export enum ShippingTag {
  Fulfillment = "fulfillment",
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
  SelfServiceOut = "self_service_out",
}

export enum SiteID {
  Mco = "MCO",
}

export enum ResultTag {
  BestSellerCandidate = "best_seller_candidate",
  CartEligible = "cart_eligible",
  DraggedBidsAndVisits = "dragged_bids_and_visits",
  GoodQualityPicture = "good_quality_picture",
  GoodQualityThumbnail = "good_quality_thumbnail",
  ImmediatePayment = "immediate_payment",
  IncompleteTechnicalSpecs = "incomplete_technical_specs",
  LoyaltyDiscountEligible = "loyalty_discount_eligible",
  ShippingGuaranteed = "shipping_guaranteed",
}


