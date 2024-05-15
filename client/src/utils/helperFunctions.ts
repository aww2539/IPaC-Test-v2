import { Feature } from "./types"

export const filterFeaturesBySearch = (search: string, features: Feature[]) => {
    const filteredFeatures = features.filter((f) => {
      if (
        f.displayName.toLowerCase().includes(search) ||
        f.epKeywords.some((keyword) => keyword.toLowerCase().includes(search))
      ) {
        return true;
      }
      return false;
    });
  
    return filteredFeatures;
};

// With postgres, a query would be something like this: 
//
// SELECT f.id, f.display_name, f.ep_keywords 
// FROM features f
// WHERE f.is_deleted = false
//     AND f.display_name like '%SEARCH_TEXT%'
//     OR exists (SELECT *
//               FROM unnest(f.ep_keywords) as ep_keywords
//               WHERE ep_keywords like '%SEARCH_TEXT%')
//
// But AWS AppSync doesn't really like to do that type of functionality with GraphQL without writing a decent amount of custom stuff, 
// so I'm using this filter function for time purposes