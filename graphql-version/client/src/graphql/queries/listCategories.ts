import { gql } from '@apollo/client'

export const listCategoriesQuery = gql`
    query listCategories($filter: TableCategoriesFilterInput, $limit: Int, $nextToken: String, $orderBy: [OrderByCategoriesInput]){
        listCategories(filter: $filter, limit: $limit, nextToken: $nextToken, orderBy: $orderBy){
            categories {
                id
                isResourceCategory: is_resource_category
                name
                optionalDescription: optional_description
                optionalDisplayDescription: optional_display_description
                sid
                sortOrder: sort_order
            }
            nextToken
        }
    }
`;
