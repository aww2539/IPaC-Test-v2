import { gql } from '@apollo/client'

export const getCategoryQuery = gql`
    query getCategory($id: Int!){
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
