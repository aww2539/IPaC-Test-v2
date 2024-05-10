// import { gql } from '@apollo/client';
// import * as Apollo from '@apollo/client';
// export type Maybe<T> = T | null;
// export type InputMaybe<T> = Maybe<T>;
// export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
// export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
// export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
// export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
// export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
// const defaultOptions = {} as const;
// /** All built-in and custom scalars, mapped to their actual values */
// export type Scalars = {
//   ID: { input: string; output: string; }
//   String: { input: string; output: string; }
//   Boolean: { input: boolean; output: boolean; }
//   Int: { input: number; output: number; }
//   Float: { input: number; output: number; }
// };

// export type Categories = {
//   __typename?: 'Categories';
//   id: Scalars['Int']['output'];
//   is_resource_category?: Maybe<Scalars['Boolean']['output']>;
//   name?: Maybe<Scalars['String']['output']>;
//   optional_description?: Maybe<Scalars['String']['output']>;
//   optional_display_description?: Maybe<Scalars['String']['output']>;
//   sid?: Maybe<Scalars['Int']['output']>;
//   sort_order?: Maybe<Scalars['Int']['output']>;
// };

// export type CategoriesConnection = {
//   __typename?: 'CategoriesConnection';
//   categories?: Maybe<Array<Maybe<Categories>>>;
//   nextToken?: Maybe<Scalars['String']['output']>;
// };

// export type CategorySids = {
//   __typename?: 'CategorySids';
//   category_id?: Maybe<Scalars['Int']['output']>;
//   id: Scalars['Int']['output'];
// };

// export type FeatureSids = {
//   __typename?: 'FeatureSids';
//   feature_id?: Maybe<Scalars['Int']['output']>;
//   id: Scalars['Int']['output'];
// };

// export type Features = {
//   __typename?: 'Features';
//   category_id?: Maybe<Scalars['Int']['output']>;
//   category_sid?: Maybe<Scalars['Int']['output']>;
//   display_name?: Maybe<Scalars['String']['output']>;
//   ep_keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
//   id: Scalars['Int']['output'];
//   is_deleted?: Maybe<Scalars['Boolean']['output']>;
//   optional_description?: Maybe<Scalars['String']['output']>;
//   optional_end_date?: Maybe<Scalars['String']['output']>;
//   sid?: Maybe<Scalars['Int']['output']>;
//   start_date?: Maybe<Scalars['String']['output']>;
//   status_code?: Maybe<Scalars['String']['output']>;
// };

// export type FeaturesConnection = {
//   __typename?: 'FeaturesConnection';
//   features?: Maybe<Array<Maybe<Features>>>;
//   nextToken?: Maybe<Scalars['String']['output']>;
// };

// export type ModelSizeInput = {
//   between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
//   eq?: InputMaybe<Scalars['Int']['input']>;
//   ge?: InputMaybe<Scalars['Int']['input']>;
//   gt?: InputMaybe<Scalars['Int']['input']>;
//   le?: InputMaybe<Scalars['Int']['input']>;
//   lt?: InputMaybe<Scalars['Int']['input']>;
//   ne?: InputMaybe<Scalars['Int']['input']>;
// };

// export enum ModelSortDirection {
//   Asc = 'ASC',
//   Desc = 'DESC'
// }

// export type OrderByCategoriesInput = {
//   id?: InputMaybe<ModelSortDirection>;
//   is_resource_category?: InputMaybe<ModelSortDirection>;
//   name?: InputMaybe<ModelSortDirection>;
//   optional_description?: InputMaybe<ModelSortDirection>;
//   optional_display_description?: InputMaybe<ModelSortDirection>;
//   sid?: InputMaybe<ModelSortDirection>;
//   sort_order?: InputMaybe<ModelSortDirection>;
// };

// export type OrderByFeaturesInput = {
//   category_id?: InputMaybe<ModelSortDirection>;
//   category_sid?: InputMaybe<ModelSortDirection>;
//   display_name?: InputMaybe<ModelSortDirection>;
//   ep_keywords?: InputMaybe<ModelSortDirection>;
//   id?: InputMaybe<ModelSortDirection>;
//   is_deleted?: InputMaybe<ModelSortDirection>;
//   optional_description?: InputMaybe<ModelSortDirection>;
//   optional_end_date?: InputMaybe<ModelSortDirection>;
//   sid?: InputMaybe<ModelSortDirection>;
//   start_date?: InputMaybe<ModelSortDirection>;
//   status_code?: InputMaybe<ModelSortDirection>;
// };

// export type Query = {
//   __typename?: 'Query';
//   getCategory?: Maybe<Categories>;
//   getCategorySid?: Maybe<CategorySids>;
//   getFeature?: Maybe<Features>;
//   getFeatureSid?: Maybe<FeatureSids>;
//   listCategories?: Maybe<CategoriesConnection>;
//   listFeatures?: Maybe<FeaturesConnection>;
// };


// export type QueryGetCategoryArgs = {
//   id: Scalars['Int']['input'];
// };


// export type QueryGetCategorySidArgs = {
//   id: Scalars['Int']['input'];
// };


// export type QueryGetFeatureArgs = {
//   id: Scalars['Int']['input'];
// };


// export type QueryGetFeatureSidArgs = {
//   id: Scalars['Int']['input'];
// };


// export type QueryListCategoriesArgs = {
//   filter?: InputMaybe<TableCategoriesFilterInput>;
//   limit?: InputMaybe<Scalars['Int']['input']>;
//   nextToken?: InputMaybe<Scalars['String']['input']>;
//   orderBy?: InputMaybe<Array<InputMaybe<OrderByCategoriesInput>>>;
// };


// export type QueryListFeaturesArgs = {
//   filter?: InputMaybe<TableFeaturesFilterInput>;
//   limit?: InputMaybe<Scalars['Int']['input']>;
//   nextToken?: InputMaybe<Scalars['String']['input']>;
//   orderBy?: InputMaybe<Array<InputMaybe<OrderByFeaturesInput>>>;
// };

// export type TableBooleanFilterInput = {
//   attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
//   eq?: InputMaybe<Scalars['Boolean']['input']>;
//   ne?: InputMaybe<Scalars['Boolean']['input']>;
// };

// export type TableCategoriesConditionInput = {
//   and?: InputMaybe<Array<InputMaybe<TableCategoriesConditionInput>>>;
//   is_resource_category?: InputMaybe<TableBooleanFilterInput>;
//   name?: InputMaybe<TableStringFilterInput>;
//   not?: InputMaybe<Array<InputMaybe<TableCategoriesConditionInput>>>;
//   optional_description?: InputMaybe<TableStringFilterInput>;
//   optional_display_description?: InputMaybe<TableStringFilterInput>;
//   or?: InputMaybe<Array<InputMaybe<TableCategoriesConditionInput>>>;
//   sid?: InputMaybe<TableIntFilterInput>;
//   sort_order?: InputMaybe<TableIntFilterInput>;
// };

// export type TableCategoriesFilterInput = {
//   and?: InputMaybe<Array<InputMaybe<TableCategoriesFilterInput>>>;
//   id?: InputMaybe<TableIntFilterInput>;
//   is_resource_category?: InputMaybe<TableBooleanFilterInput>;
//   name?: InputMaybe<TableStringFilterInput>;
//   not?: InputMaybe<Array<InputMaybe<TableCategoriesFilterInput>>>;
//   optional_description?: InputMaybe<TableStringFilterInput>;
//   optional_display_description?: InputMaybe<TableStringFilterInput>;
//   or?: InputMaybe<Array<InputMaybe<TableCategoriesFilterInput>>>;
//   sid?: InputMaybe<TableIntFilterInput>;
//   sort_order?: InputMaybe<TableIntFilterInput>;
// };

// export type TableFeaturesConditionInput = {
//   and?: InputMaybe<Array<InputMaybe<TableFeaturesConditionInput>>>;
//   category_id?: InputMaybe<TableIntFilterInput>;
//   category_sid?: InputMaybe<TableIntFilterInput>;
//   display_name?: InputMaybe<TableStringFilterInput>;
//   ep_keywords?: InputMaybe<TableStringFilterInput>;
//   is_deleted?: InputMaybe<TableBooleanFilterInput>;
//   not?: InputMaybe<Array<InputMaybe<TableFeaturesConditionInput>>>;
//   optional_description?: InputMaybe<TableStringFilterInput>;
//   optional_end_date?: InputMaybe<TableStringFilterInput>;
//   or?: InputMaybe<Array<InputMaybe<TableFeaturesConditionInput>>>;
//   sid?: InputMaybe<TableIntFilterInput>;
//   start_date?: InputMaybe<TableStringFilterInput>;
//   status_code?: InputMaybe<TableStringFilterInput>;
// };

// export type TableFeaturesFilterInput = {
//   and?: InputMaybe<Array<InputMaybe<TableFeaturesFilterInput>>>;
//   category_id?: InputMaybe<TableIntFilterInput>;
//   category_sid?: InputMaybe<TableIntFilterInput>;
//   display_name?: InputMaybe<TableStringFilterInput>;
//   ep_keywords?: InputMaybe<TableStringFilterInput>;
//   id?: InputMaybe<TableIntFilterInput>;
//   is_deleted?: InputMaybe<TableBooleanFilterInput>;
//   not?: InputMaybe<Array<InputMaybe<TableFeaturesFilterInput>>>;
//   optional_description?: InputMaybe<TableStringFilterInput>;
//   optional_end_date?: InputMaybe<TableStringFilterInput>;
//   or?: InputMaybe<Array<InputMaybe<TableFeaturesFilterInput>>>;
//   sid?: InputMaybe<TableIntFilterInput>;
//   start_date?: InputMaybe<TableStringFilterInput>;
//   status_code?: InputMaybe<TableStringFilterInput>;
// };

// export type TableIntFilterInput = {
//   attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
//   between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
//   eq?: InputMaybe<Scalars['Int']['input']>;
//   ge?: InputMaybe<Scalars['Int']['input']>;
//   gt?: InputMaybe<Scalars['Int']['input']>;
//   le?: InputMaybe<Scalars['Int']['input']>;
//   lt?: InputMaybe<Scalars['Int']['input']>;
//   ne?: InputMaybe<Scalars['Int']['input']>;
// };

// export type TableStringFilterInput = {
//   attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
//   beginsWith?: InputMaybe<Scalars['String']['input']>;
//   between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
//   contains?: InputMaybe<Scalars['String']['input']>;
//   eq?: InputMaybe<Scalars['String']['input']>;
//   ge?: InputMaybe<Scalars['String']['input']>;
//   gt?: InputMaybe<Scalars['String']['input']>;
//   le?: InputMaybe<Scalars['String']['input']>;
//   lt?: InputMaybe<Scalars['String']['input']>;
//   ne?: InputMaybe<Scalars['String']['input']>;
//   size?: InputMaybe<ModelSizeInput>;
// };

// export type GetCategoryQueryVariables = Exact<{
//   id: Scalars['Int']['input'];
// }>;


// export type GetCategoryQuery = { __typename?: 'Query', getCategory?: { __typename?: 'Categories', id: number, is_resource_category?: boolean | null, name?: string | null, optional_description?: string | null, optional_display_description?: string | null, sid?: number | null, sort_order?: number | null } | null };

// export type GetCategorySidQueryVariables = Exact<{
//   id: Scalars['Int']['input'];
// }>;


// export type GetCategorySidQuery = { __typename?: 'Query', getCategorySid?: { __typename?: 'CategorySids', category_id?: number | null, id: number } | null };

// export type GetFeatureQueryVariables = Exact<{
//   id: Scalars['Int']['input'];
// }>;


// export type GetFeatureQuery = { __typename?: 'Query', getFeature?: { __typename?: 'Features', category_id?: number | null, category_sid?: number | null, display_name?: string | null, ep_keywords?: Array<string | null> | null, id: number, is_deleted?: boolean | null, optional_description?: string | null, optional_end_date?: string | null, sid?: number | null, start_date?: string | null, status_code?: string | null } | null };

// export type GetFeatureSidQueryVariables = Exact<{
//   id: Scalars['Int']['input'];
// }>;


// export type GetFeatureSidQuery = { __typename?: 'Query', getFeatureSid?: { __typename?: 'FeatureSids', feature_id?: number | null, id: number } | null };

// export type ListCategoriesQueryVariables = Exact<{
//   filter?: InputMaybe<TableCategoriesFilterInput>;
//   limit?: InputMaybe<Scalars['Int']['input']>;
//   nextToken?: InputMaybe<Scalars['String']['input']>;
//   orderBy?: InputMaybe<Array<InputMaybe<OrderByCategoriesInput>> | InputMaybe<OrderByCategoriesInput>>;
// }>;


// export type ListCategoriesQuery = { __typename?: 'Query', listCategories?: { __typename?: 'CategoriesConnection', nextToken?: string | null, categories?: Array<{ __typename?: 'Categories', id: number, is_resource_category?: boolean | null, name?: string | null, optional_description?: string | null, optional_display_description?: string | null, sid?: number | null, sort_order?: number | null } | null> | null } | null };

// export type ListFeaturesQueryVariables = Exact<{
//   filter?: InputMaybe<TableFeaturesFilterInput>;
//   limit?: InputMaybe<Scalars['Int']['input']>;
//   nextToken?: InputMaybe<Scalars['String']['input']>;
//   orderBy?: InputMaybe<Array<InputMaybe<OrderByFeaturesInput>> | InputMaybe<OrderByFeaturesInput>>;
// }>;


// export type ListFeaturesQuery = { __typename?: 'Query', listFeatures?: { __typename?: 'FeaturesConnection', nextToken?: string | null, features?: Array<{ __typename?: 'Features', category_id?: number | null, category_sid?: number | null, display_name?: string | null, ep_keywords?: Array<string | null> | null, id: number, is_deleted?: boolean | null, optional_description?: string | null, optional_end_date?: string | null, sid?: number | null, start_date?: string | null, status_code?: string | null } | null> | null } | null };


// export const GetCategoryDocument = gql`
//     query getCategory($id: Int!) {
//   getCategory(id: $id) {
//     id
//     is_resource_category
//     name
//     optional_description
//     optional_display_description
//     sid
//     sort_order
//   }
// }
//     `;

// /**
//  * __useGetCategoryQuery__
//  *
//  * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetCategoryQuery({
//  *   variables: {
//  *      id: // value for 'id'
//  *   },
//  * });
//  */
// export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables> & ({ variables: GetCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
//         const options = {...defaultOptions, ...baseOptions}
//         return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
//       }
// export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
//         }
// export function useGetCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useSuspenseQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
//         }
// export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
// export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
// export type GetCategorySuspenseQueryHookResult = ReturnType<typeof useGetCategorySuspenseQuery>;
// export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
// export const GetCategorySidDocument = gql`
//     query getCategorySid($id: Int!) {
//   getCategorySid(id: $id) {
//     category_id
//     id
//   }
// }
//     `;

// /**
//  * __useGetCategorySidQuery__
//  *
//  * To run a query within a React component, call `useGetCategorySidQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetCategorySidQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetCategorySidQuery({
//  *   variables: {
//  *      id: // value for 'id'
//  *   },
//  * });
//  */
// export function useGetCategorySidQuery(baseOptions: Apollo.QueryHookOptions<GetCategorySidQuery, GetCategorySidQueryVariables> & ({ variables: GetCategorySidQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
//         const options = {...defaultOptions, ...baseOptions}
//         return Apollo.useQuery<GetCategorySidQuery, GetCategorySidQueryVariables>(GetCategorySidDocument, options);
//       }
// export function useGetCategorySidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategorySidQuery, GetCategorySidQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useLazyQuery<GetCategorySidQuery, GetCategorySidQueryVariables>(GetCategorySidDocument, options);
//         }
// export function useGetCategorySidSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategorySidQuery, GetCategorySidQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useSuspenseQuery<GetCategorySidQuery, GetCategorySidQueryVariables>(GetCategorySidDocument, options);
//         }
// export type GetCategorySidQueryHookResult = ReturnType<typeof useGetCategorySidQuery>;
// export type GetCategorySidLazyQueryHookResult = ReturnType<typeof useGetCategorySidLazyQuery>;
// export type GetCategorySidSuspenseQueryHookResult = ReturnType<typeof useGetCategorySidSuspenseQuery>;
// export type GetCategorySidQueryResult = Apollo.QueryResult<GetCategorySidQuery, GetCategorySidQueryVariables>;
// export const GetFeatureDocument = gql`
//     query getFeature($id: Int!) {
//   getFeature(id: $id) {
//     category_id
//     category_sid
//     display_name
//     ep_keywords
//     id
//     is_deleted
//     optional_description
//     optional_end_date
//     sid
//     start_date
//     status_code
//   }
// }
//     `;

// /**
//  * __useGetFeatureQuery__
//  *
//  * To run a query within a React component, call `useGetFeatureQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetFeatureQuery({
//  *   variables: {
//  *      id: // value for 'id'
//  *   },
//  * });
//  */
// export function useGetFeatureQuery(baseOptions: Apollo.QueryHookOptions<GetFeatureQuery, GetFeatureQueryVariables> & ({ variables: GetFeatureQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
//         const options = {...defaultOptions, ...baseOptions}
//         return Apollo.useQuery<GetFeatureQuery, GetFeatureQueryVariables>(GetFeatureDocument, options);
//       }
// export function useGetFeatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureQuery, GetFeatureQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useLazyQuery<GetFeatureQuery, GetFeatureQueryVariables>(GetFeatureDocument, options);
//         }
// export function useGetFeatureSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFeatureQuery, GetFeatureQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useSuspenseQuery<GetFeatureQuery, GetFeatureQueryVariables>(GetFeatureDocument, options);
//         }
// export type GetFeatureQueryHookResult = ReturnType<typeof useGetFeatureQuery>;
// export type GetFeatureLazyQueryHookResult = ReturnType<typeof useGetFeatureLazyQuery>;
// export type GetFeatureSuspenseQueryHookResult = ReturnType<typeof useGetFeatureSuspenseQuery>;
// export type GetFeatureQueryResult = Apollo.QueryResult<GetFeatureQuery, GetFeatureQueryVariables>;
// export const GetFeatureSidDocument = gql`
//     query getFeatureSid($id: Int!) {
//   getFeatureSid(id: $id) {
//     feature_id
//     id
//   }
// }
//     `;

// /**
//  * __useGetFeatureSidQuery__
//  *
//  * To run a query within a React component, call `useGetFeatureSidQuery` and pass it any options that fit your needs.
//  * When your component renders, `useGetFeatureSidQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useGetFeatureSidQuery({
//  *   variables: {
//  *      id: // value for 'id'
//  *   },
//  * });
//  */
// export function useGetFeatureSidQuery(baseOptions: Apollo.QueryHookOptions<GetFeatureSidQuery, GetFeatureSidQueryVariables> & ({ variables: GetFeatureSidQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
//         const options = {...defaultOptions, ...baseOptions}
//         return Apollo.useQuery<GetFeatureSidQuery, GetFeatureSidQueryVariables>(GetFeatureSidDocument, options);
//       }
// export function useGetFeatureSidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureSidQuery, GetFeatureSidQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useLazyQuery<GetFeatureSidQuery, GetFeatureSidQueryVariables>(GetFeatureSidDocument, options);
//         }
// export function useGetFeatureSidSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFeatureSidQuery, GetFeatureSidQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useSuspenseQuery<GetFeatureSidQuery, GetFeatureSidQueryVariables>(GetFeatureSidDocument, options);
//         }
// export type GetFeatureSidQueryHookResult = ReturnType<typeof useGetFeatureSidQuery>;
// export type GetFeatureSidLazyQueryHookResult = ReturnType<typeof useGetFeatureSidLazyQuery>;
// export type GetFeatureSidSuspenseQueryHookResult = ReturnType<typeof useGetFeatureSidSuspenseQuery>;
// export type GetFeatureSidQueryResult = Apollo.QueryResult<GetFeatureSidQuery, GetFeatureSidQueryVariables>;
// export const ListCategoriesDocument = gql`
//     query listCategories($filter: TableCategoriesFilterInput, $limit: Int, $nextToken: String, $orderBy: [OrderByCategoriesInput]) {
//   listCategories(
//     filter: $filter
//     limit: $limit
//     nextToken: $nextToken
//     orderBy: $orderBy
//   ) {
//     categories {
//       id
//       is_resource_category
//       name
//       optional_description
//       optional_display_description
//       sid
//       sort_order
//     }
//     nextToken
//   }
// }
//     `;

// /**
//  * __useListCategoriesQuery__
//  *
//  * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
//  * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useListCategoriesQuery({
//  *   variables: {
//  *      filter: // value for 'filter'
//  *      limit: // value for 'limit'
//  *      nextToken: // value for 'nextToken'
//  *      orderBy: // value for 'orderBy'
//  *   },
//  * });
//  */
// export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
//         const options = {...defaultOptions, ...baseOptions}
//         return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
//       }
// export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
//         }
// export function useListCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useSuspenseQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
//         }
// export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
// export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
// export type ListCategoriesSuspenseQueryHookResult = ReturnType<typeof useListCategoriesSuspenseQuery>;
// export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;
// export const ListFeaturesDocument = gql`
//     query listFeatures($filter: TableFeaturesFilterInput, $limit: Int, $nextToken: String, $orderBy: [OrderByFeaturesInput]) {
//   listFeatures(
//     filter: $filter
//     limit: $limit
//     nextToken: $nextToken
//     orderBy: $orderBy
//   ) {
//     features {
//       category_id
//       category_sid
//       display_name
//       ep_keywords
//       id
//       is_deleted
//       optional_description
//       optional_end_date
//       sid
//       start_date
//       status_code
//     }
//     nextToken
//   }
// }
//     `;

// /**
//  * __useListFeaturesQuery__
//  *
//  * To run a query within a React component, call `useListFeaturesQuery` and pass it any options that fit your needs.
//  * When your component renders, `useListFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useListFeaturesQuery({
//  *   variables: {
//  *      filter: // value for 'filter'
//  *      limit: // value for 'limit'
//  *      nextToken: // value for 'nextToken'
//  *      orderBy: // value for 'orderBy'
//  *   },
//  * });
//  */
// export function useListFeaturesQuery(baseOptions?: Apollo.QueryHookOptions<ListFeaturesQuery, ListFeaturesQueryVariables>) {
//         const options = {...defaultOptions, ...baseOptions}
//         return Apollo.useQuery<ListFeaturesQuery, ListFeaturesQueryVariables>(ListFeaturesDocument, options);
//       }
// export function useListFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFeaturesQuery, ListFeaturesQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useLazyQuery<ListFeaturesQuery, ListFeaturesQueryVariables>(ListFeaturesDocument, options);
//         }
// export function useListFeaturesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListFeaturesQuery, ListFeaturesQueryVariables>) {
//           const options = {...defaultOptions, ...baseOptions}
//           return Apollo.useSuspenseQuery<ListFeaturesQuery, ListFeaturesQueryVariables>(ListFeaturesDocument, options);
//         }
// export type ListFeaturesQueryHookResult = ReturnType<typeof useListFeaturesQuery>;
// export type ListFeaturesLazyQueryHookResult = ReturnType<typeof useListFeaturesLazyQuery>;
// export type ListFeaturesSuspenseQueryHookResult = ReturnType<typeof useListFeaturesSuspenseQuery>;
// export type ListFeaturesQueryResult = Apollo.QueryResult<ListFeaturesQuery, ListFeaturesQueryVariables>;