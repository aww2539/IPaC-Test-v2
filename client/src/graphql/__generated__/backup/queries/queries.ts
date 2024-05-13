import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

export const ListFeatures = gql`
    query listFeatures($filter: TableFeaturesFilterInput, $limit: Int, $nextToken: String, $orderBy: [OrderByFeaturesInput]) {
        listFeatures(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            orderBy: $orderBy
        ) {
            features {
                category_id
                category_sid
                display_name
                ep_keywords
                id
                is_deleted
                optional_description
                optional_end_date
                sid
                start_date
                status_code
                }
            nextToken
        }
    }
`;

export const ListCategories = gql`
    query listCategories($filter: TableCategoriesFilterInput, $limit: Int, $nextToken: String, $orderBy: [OrderByCategoriesInput]) {
        listCategories(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            orderBy: $orderBy
        ) {
            categories {
                id
                is_resource_category
                name
                optional_description
                optional_display_description
                sid
                sort_order
            }
            nextToken
        }
    }
`;

export const GetCategory = gql`
    query getCategory($id: Int!) {
        getCategory(id: $id) {
            id
            is_resource_category
            name
            optional_description
            optional_display_description
            sid
            sort_order
        }
    }
`;

export const GetCategorySid = gql`
    query getCategorySid($id: Int!) {
        getCategorySid(id: $id) {
            category_id
            id
        }
    }
`;

export const GetFeatureSid = gql`
    query getFeatureSid($id: Int!) {
        getFeatureSid(id: $id) {
            feature_id
            id
        }
    }
`;

export const GetFeature = gql`
    query getFeature($id: Int!) {
        getFeature(id: $id) {
            category_id
            category_sid
            display_name
            ep_keywords
            id
            is_deleted
            optional_description
            optional_end_date
            sid
            start_date
            status_code
        }
    }
`;