import { useEffect, useState } from 'react';
import { filterFeaturesBySearch } from './utils/helperFunctions';
import { CategoriesList } from './Modules/Categories/CategoriesList';
import { Header } from './Modules/Header/Header';
import { Box, debounce } from '@mui/material';
import { CategoryFeatures } from './Modules/CategoryFeatures/CategoryFeatures';
import { Category, Feature } from './utils/types';
import { useLazyQuery } from '@apollo/client';
import { listFeaturesQuery } from './graphql/queries/listFeatures'
import { useGetCurrentCategories } from './utils/hooks'

const App = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const [featuresByCategory, setFeaturesByCategory] = useState<Feature[]>([])
  const [search, setSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Feature[]>([])
  const [featuresToSearch, setFeaturesToSearch] = useState<Feature[]>([])
  
  const { categoryData } = useGetCurrentCategories()

  useEffect(() => {
    if (categoryData) {
      setCategories(categoryData)
      setSelectedCategory(categoryData[0])
    }
  }, [categoryData])

  const [getAndSetFeaturesByCategory, { error }] = useLazyQuery(listFeaturesQuery, { 
    variables: {
      filter: {
        category_sid: {
          eq: selectedCategory?.sid
        }, 
        is_deleted: {
          eq: false
        }
      }, 
      orderBy: {
        display_name: 'ASC'
      }
    },
    onCompleted: (response) => {
      setFeaturesByCategory(response.listFeatures.features)
    },
    onError: () => {
      console.warn(error)
    }
  })

  useEffect(() => {
    getAndSetFeaturesByCategory()
  }, [selectedCategory])

  // a debounce would be good with the search
  const [getAndSetFeaturesBySearch, { data }] = useLazyQuery(listFeaturesQuery, {
    variables: {
      filter: { 
        is_deleted: {
          eq: false
        }
      }, 
      orderBy: {
        display_name: 'ASC',
      },
    },
    onCompleted: (response) => {
      setFeaturesToSearch(response.listFeatures.features);
    },
  });

  useEffect(() => {
    if (data) {
      setFeaturesToSearch(data.listFeatures.features);
    }
  }, [data]);
  
  useEffect(() => {
    if (search) {
      if (featuresToSearch.length) {
        const filtered = filterFeaturesBySearch(search.toLowerCase(), featuresToSearch);
        setSearchResults(filtered);
      } else {
        getAndSetFeaturesBySearch();
      }
    }
  }, [search, featuresToSearch]);

  return (
    <Box
      sx={{
        display: 'grid',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#cce4f9',
        gridTemplate: `
          "header header header"
          "category-menu content content"
          "category-menu content content"
          "category-menu content content"
        `,
        gridTemplateColumns: 'auto minmax(0, 1fr) auto',
        gridTemplateRows: '100px 1fr 50px auto'
      }}
    >

      <Header search={search} setSearch={setSearch} />

      <Box sx={{ 
          gridArea: 'category-menu',
          marginTop: 4,
          paddingX: 4, 
          height: '80vh', 
          overflow: 'hidden', 
          overflowY: 'auto'
        }}
      >
        {categories.length >= 1 && selectedCategory && (
          <CategoriesList 
            categories={categories} 
            selectedCategorySid={selectedCategory.sid}
            setSelectedCategory={setSelectedCategory}
            isSearching={!!!search}
            setSearch={setSearch}
          />
        )}
      </Box>

      <Box sx={{ 
        gridArea: 'content', 
        paddingRight: 8, 
        paddingLeft: 2, 
        marginTop: 4, 
        height: '80vh', 
        overflow: 'hidden', 
        overflowY: 'auto' 
        }}
      >
        {selectedCategory && (
          <CategoryFeatures 
            selectedCategory={selectedCategory} 
            featuresByCategory={featuresByCategory} 
            search={search} 
            searchResults={searchResults}
          />
          )}
      </Box>
    </Box>
  );
}

export default App;
