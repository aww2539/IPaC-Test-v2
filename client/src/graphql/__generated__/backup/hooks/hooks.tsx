import * as Apollo from '@apollo/client';
import { OrderByCategoriesInput, OrderByFeaturesInput, Scalars, TableCategoriesFilterInput, TableFeaturesFilterInput } from '../types/types';
import { GetCategory, GetCategorySid, GetFeature, GetFeatureSid, ListCategories, ListFeatures  } from '../queries/queries';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;

export type GetCategoryQuery = { __typename?: 'Query', getCategory?: { __typename?: 'Categories', id: number, is_resource_category?: boolean | null, name?: string | null, optional_description?: string | null, optional_display_description?: string | null, sid?: number | null, sort_order?: number | null } | null };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetCategorySidQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetCategorySidQuery = { __typename?: 'Query', getCategorySid?: { __typename?: 'CategorySids', category_id?: number | null, id: number } | null };

export type GetFeatureQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetFeatureQuery = { __typename?: 'Query', getFeature?: { __typename?: 'Features', category_id?: number | null, category_sid?: number | null, display_name?: string | null, ep_keywords?: Array<string | null> | null, id: number, is_deleted?: boolean | null, optional_description?: string | null, optional_end_date?: string | null, sid?: number | null, start_date?: string | null, status_code?: string | null } | null };

export type GetFeatureSidQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetFeatureSidQuery = { __typename?: 'Query', getFeatureSid?: { __typename?: 'FeatureSids', feature_id?: number | null, id: number } | null };

export type ListCategoriesQueryVariables = Exact<{
  filter?: InputMaybe<TableCategoriesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderByCategoriesInput>> | InputMaybe<OrderByCategoriesInput>>;
}>;


export type ListCategoriesQuery = { __typename?: 'Query', listCategories?: { __typename?: 'CategoriesConnection', nextToken?: string | null, categories?: Array<{ __typename?: 'Categories', id: number, is_resource_category?: boolean | null, name?: string | null, optional_description?: string | null, optional_display_description?: string | null, sid?: number | null, sort_order?: number | null } | null> | null } | null };

export type ListFeaturesQueryVariables = Exact<{
  filter?: InputMaybe<TableFeaturesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderByFeaturesInput>> | InputMaybe<OrderByFeaturesInput>>;
}>;


export type ListFeaturesQuery = { __typename?: 'Query', listFeatures?: { __typename?: 'FeaturesConnection', nextToken?: string | null, features?: Array<{ __typename?: 'Features', category_id?: number | null, category_sid?: number | null, display_name?: string | null, ep_keywords?: Array<string | null> | null, id: number, is_deleted?: boolean | null, optional_description?: string | null, optional_end_date?: string | null, sid?: number | null, start_date?: string | null, status_code?: string | null } | null> | null } | null };




/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategorySidQueryVariables> & ({ variables: GetCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategorySidQueryVariables>(GetCategory, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategory, options);
        }
export function useGetCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategory, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategorySuspenseQueryHookResult = ReturnType<typeof useGetCategorySuspenseQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;


/**
 * __useGetCategorySidQuery__
 *
 * To run a query within a React component, call `useGetCategorySidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategorySidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategorySidQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategorySidQuery(baseOptions: Apollo.QueryHookOptions<GetCategorySidQuery, GetCategorySidQueryVariables> & ({ variables: GetCategorySidQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategorySidQuery, GetCategorySidQueryVariables>(GetCategorySid, options);
      }
export function useGetCategorySidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategorySidQuery, GetCategorySidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategorySidQuery, GetCategorySidQueryVariables>(GetCategorySid, options);
        }
export function useGetCategorySidSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategorySidQuery, GetCategorySidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategorySidQuery, GetCategorySidQueryVariables>(GetCategorySid, options);
        }
export type GetCategorySidQueryHookResult = ReturnType<typeof useGetCategorySidQuery>;
export type GetCategorySidLazyQueryHookResult = ReturnType<typeof useGetCategorySidLazyQuery>;
export type GetCategorySidSuspenseQueryHookResult = ReturnType<typeof useGetCategorySidSuspenseQuery>;
export type GetCategorySidQueryResult = Apollo.QueryResult<GetCategorySidQuery, GetCategorySidQueryVariables>;

/**
 * __useGetFeatureQuery__
 *
 * To run a query within a React component, call `useGetFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeatureQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFeatureQuery(baseOptions: Apollo.QueryHookOptions<GetFeatureQuery, GetFeatureQueryVariables> & ({ variables: GetFeatureQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeatureQuery, GetFeatureQueryVariables>(GetFeature, options);
      }
export function useGetFeatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureQuery, GetFeatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeatureQuery, GetFeatureQueryVariables>(GetFeature, options);
        }
export function useGetFeatureSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFeatureQuery, GetFeatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeatureQuery, GetFeatureQueryVariables>(GetFeature, options);
        }
export type GetFeatureQueryHookResult = ReturnType<typeof useGetFeatureQuery>;
export type GetFeatureLazyQueryHookResult = ReturnType<typeof useGetFeatureLazyQuery>;
export type GetFeatureSuspenseQueryHookResult = ReturnType<typeof useGetFeatureSuspenseQuery>;
export type GetFeatureQueryResult = Apollo.QueryResult<GetFeatureQuery, GetFeatureQueryVariables>;


/**
 * __useGetFeatureSidQuery__
 *
 * To run a query within a React component, call `useGetFeatureSidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeatureSidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeatureSidQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFeatureSidQuery(baseOptions: Apollo.QueryHookOptions<GetFeatureSidQuery, GetFeatureSidQueryVariables> & ({ variables: GetFeatureSidQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeatureSidQuery, GetFeatureSidQueryVariables>(GetFeatureSid, options);
      }
export function useGetFeatureSidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureSidQuery, GetFeatureSidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeatureSidQuery, GetFeatureSidQueryVariables>(GetFeatureSid, options);
        }
export function useGetFeatureSidSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFeatureSidQuery, GetFeatureSidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeatureSidQuery, GetFeatureSidQueryVariables>(GetFeatureSid, options);
        }
export type GetFeatureSidQueryHookResult = ReturnType<typeof useGetFeatureSidQuery>;
export type GetFeatureSidLazyQueryHookResult = ReturnType<typeof useGetFeatureSidLazyQuery>;
export type GetFeatureSidSuspenseQueryHookResult = ReturnType<typeof useGetFeatureSidSuspenseQuery>;
export type GetFeatureSidQueryResult = Apollo.QueryResult<GetFeatureSidQuery, GetFeatureSidQueryVariables>;


/**
 * __useListCategoriesQuery__
 *
 * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategories, options);
      }
export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategories, options);
        }
export function useListCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategories, options);
        }
export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
export type ListCategoriesSuspenseQueryHookResult = ReturnType<typeof useListCategoriesSuspenseQuery>;
export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;


/**
 * __useListFeaturesQuery__
 *
 * To run a query within a React component, call `useListFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFeaturesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useListFeaturesQuery(baseOptions?: Apollo.QueryHookOptions<ListFeaturesQuery, ListFeaturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFeaturesQuery, ListFeaturesQueryVariables>(ListFeatures, options);
      }
export function useListFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFeaturesQuery, ListFeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFeaturesQuery, ListFeaturesQueryVariables>(ListFeatures, options);
        }
export function useListFeaturesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListFeaturesQuery, ListFeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListFeaturesQuery, ListFeaturesQueryVariables>(ListFeatures, options);
        }
export type ListFeaturesQueryHookResult = ReturnType<typeof useListFeaturesQuery>;
export type ListFeaturesLazyQueryHookResult = ReturnType<typeof useListFeaturesLazyQuery>;
export type ListFeaturesSuspenseQueryHookResult = ReturnType<typeof useListFeaturesSuspenseQuery>;
export type ListFeaturesQueryResult = Apollo.QueryResult<ListFeaturesQuery, ListFeaturesQueryVariables>;