import { gql } from '@apollo/client'

export const getFeatureQuery = gql`
    query getFeature($id: Int!){
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
