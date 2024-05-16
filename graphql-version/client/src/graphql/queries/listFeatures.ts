import { gql } from '@apollo/client'

export const listFeaturesQuery = gql`
    query listFeatures($filter: TableFeaturesFilterInput, $limit: Int, $nextToken: String, $orderBy: [OrderByFeaturesInput]){
        listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken, orderBy: $orderBy){
            features {
                categoryId: category_id
                categorySid: category_sid
                displayName: display_name
                epKeywords: ep_keywords
                id
                isDeleted: is_deleted
                optionalDescription: optional_description
                optionalEndDate: optional_end_date
                sid
                startDate: start_date
                statusCode: status_code
            }
            nextToken
        }
    }
`;
