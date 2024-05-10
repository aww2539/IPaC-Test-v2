export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Categories = {
  __typename?: 'Categories';
  id: Scalars['Int']['output'];
  is_resource_category?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  optional_description?: Maybe<Scalars['String']['output']>;
  optional_display_description?: Maybe<Scalars['String']['output']>;
  sid?: Maybe<Scalars['Int']['output']>;
  sort_order?: Maybe<Scalars['Int']['output']>;
};

export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  categories?: Maybe<Array<Maybe<Categories>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type CategorySids = {
  __typename?: 'CategorySids';
  category_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
};

export type FeatureSids = {
  __typename?: 'FeatureSids';
  feature_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
};

export type Features = {
  __typename?: 'Features';
  category_id?: Maybe<Scalars['Int']['output']>;
  category_sid?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  ep_keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['Int']['output'];
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  optional_description?: Maybe<Scalars['String']['output']>;
  optional_end_date?: Maybe<Scalars['String']['output']>;
  sid?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  status_code?: Maybe<Scalars['String']['output']>;
};

export type FeaturesConnection = {
  __typename?: 'FeaturesConnection';
  features?: Maybe<Array<Maybe<Features>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByCategoriesInput = {
  id?: InputMaybe<ModelSortDirection>;
  is_resource_category?: InputMaybe<ModelSortDirection>;
  name?: InputMaybe<ModelSortDirection>;
  optional_description?: InputMaybe<ModelSortDirection>;
  optional_display_description?: InputMaybe<ModelSortDirection>;
  sid?: InputMaybe<ModelSortDirection>;
  sort_order?: InputMaybe<ModelSortDirection>;
};

export type OrderByFeaturesInput = {
  category_id?: InputMaybe<ModelSortDirection>;
  category_sid?: InputMaybe<ModelSortDirection>;
  display_name?: InputMaybe<ModelSortDirection>;
  ep_keywords?: InputMaybe<ModelSortDirection>;
  id?: InputMaybe<ModelSortDirection>;
  is_deleted?: InputMaybe<ModelSortDirection>;
  optional_description?: InputMaybe<ModelSortDirection>;
  optional_end_date?: InputMaybe<ModelSortDirection>;
  sid?: InputMaybe<ModelSortDirection>;
  start_date?: InputMaybe<ModelSortDirection>;
  status_code?: InputMaybe<ModelSortDirection>;
};

export type Query = {
  __typename?: 'Query';
  getCategory?: Maybe<Categories>;
  getCategorySid?: Maybe<CategorySids>;
  getFeature?: Maybe<Features>;
  getFeatureSid?: Maybe<FeatureSids>;
  listCategories?: Maybe<CategoriesConnection>;
  listFeatures?: Maybe<FeaturesConnection>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetCategorySidArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetFeatureArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetFeatureSidArgs = {
  id: Scalars['Int']['input'];
};


export type QueryListCategoriesArgs = {
  filter?: InputMaybe<TableCategoriesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderByCategoriesInput>>>;
};


export type QueryListFeaturesArgs = {
  filter?: InputMaybe<TableFeaturesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderByFeaturesInput>>>;
};

export type TableBooleanFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableCategoriesConditionInput = {
  and?: InputMaybe<Array<InputMaybe<TableCategoriesConditionInput>>>;
  is_resource_category?: InputMaybe<TableBooleanFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  not?: InputMaybe<Array<InputMaybe<TableCategoriesConditionInput>>>;
  optional_description?: InputMaybe<TableStringFilterInput>;
  optional_display_description?: InputMaybe<TableStringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<TableCategoriesConditionInput>>>;
  sid?: InputMaybe<TableIntFilterInput>;
  sort_order?: InputMaybe<TableIntFilterInput>;
};

export type TableCategoriesFilterInput = {
  and?: InputMaybe<Array<InputMaybe<TableCategoriesFilterInput>>>;
  id?: InputMaybe<TableIntFilterInput>;
  is_resource_category?: InputMaybe<TableBooleanFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  not?: InputMaybe<Array<InputMaybe<TableCategoriesFilterInput>>>;
  optional_description?: InputMaybe<TableStringFilterInput>;
  optional_display_description?: InputMaybe<TableStringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<TableCategoriesFilterInput>>>;
  sid?: InputMaybe<TableIntFilterInput>;
  sort_order?: InputMaybe<TableIntFilterInput>;
};

export type TableFeaturesConditionInput = {
  and?: InputMaybe<Array<InputMaybe<TableFeaturesConditionInput>>>;
  category_id?: InputMaybe<TableIntFilterInput>;
  category_sid?: InputMaybe<TableIntFilterInput>;
  display_name?: InputMaybe<TableStringFilterInput>;
  ep_keywords?: InputMaybe<TableStringFilterInput>;
  is_deleted?: InputMaybe<TableBooleanFilterInput>;
  not?: InputMaybe<Array<InputMaybe<TableFeaturesConditionInput>>>;
  optional_description?: InputMaybe<TableStringFilterInput>;
  optional_end_date?: InputMaybe<TableStringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<TableFeaturesConditionInput>>>;
  sid?: InputMaybe<TableIntFilterInput>;
  start_date?: InputMaybe<TableStringFilterInput>;
  status_code?: InputMaybe<TableStringFilterInput>;
};

export type TableFeaturesFilterInput = {
  and?: InputMaybe<Array<InputMaybe<TableFeaturesFilterInput>>>;
  category_id?: InputMaybe<TableIntFilterInput>;
  category_sid?: InputMaybe<TableIntFilterInput>;
  display_name?: InputMaybe<TableStringFilterInput>;
  ep_keywords?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIntFilterInput>;
  is_deleted?: InputMaybe<TableBooleanFilterInput>;
  not?: InputMaybe<Array<InputMaybe<TableFeaturesFilterInput>>>;
  optional_description?: InputMaybe<TableStringFilterInput>;
  optional_end_date?: InputMaybe<TableStringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<TableFeaturesFilterInput>>>;
  sid?: InputMaybe<TableIntFilterInput>;
  start_date?: InputMaybe<TableStringFilterInput>;
  status_code?: InputMaybe<TableStringFilterInput>;
};

export type TableIntFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type TableStringFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};
