import { Feature } from "./types"

export const filterFeaturesBySearch = (search: string, features: Feature[]) => {
    const filteredFeatures = features.filter((f) => {
      if (
        f.display_name.toLowerCase().includes(search) ||
        f.ep_keywords.some((keyword) => keyword.toLowerCase().includes(search))
      ) {
        return true;
      }
      return false;
    });
  
    return filteredFeatures;
};

// Can use this instead of making an API call every time a new category is selected. 
// Would require fetching all features on initial render and storing them in a state.
export const filterFeaturesByCategory = (category_sid: number, features: Feature[]) => {
    const filteredFeatures = features.filter(f => f.category_sid === category_sid )
    return filteredFeatures;
};