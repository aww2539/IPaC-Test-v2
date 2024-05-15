import { useEffect, useState } from 'react';
import { getFeaturesBySearch } from './utils/helperFunctions';
import { CategoriesList } from './Modules/Categories/CategoriesList';
import { Header } from './Modules/Header/Header';
import { Box } from '@mui/material';
import { CategoryFeatures } from './Modules/CategoryFeatures/CategoryFeatures';
import { Category, Feature } from './utils/types';
import { useLazyQuery } from '@apollo/client';
import { listFeaturesQuery } from './graphql/queries/listFeatures'
import { useGetCurrentCategories } from './utils/apiManager'

const App = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const [featuresByCategory, setFeaturesByCategory] = useState<Feature[]>([])
  const [search, setSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Feature[]>([])
  
  const { categoryData } = useGetCurrentCategories()

  useEffect(() => {
    if (categoryData) {
      setCategories(categoryData)
      setSelectedCategory(categoryData[0])
    }
  }, [categoryData])

  const [getAndSetFeaturesByCategory, { loading, error }] = useLazyQuery(listFeaturesQuery, { 
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

  // probably have to write a custom resolver on appsync to handle array_contains from graphql -> postgres for the ep_keywords field
  // but basic functionality should be fully swapped over to graphql at that point
  const [getAndSetFeaturesBySearch] = useLazyQuery(listFeaturesQuery, { 
    variables: {
      filter: {
        display_name: {
          contains: search
        }, 
        or: {
          ep_keywords: {
            arrayContains: search
          }
        }
      }, 
      orderBy: {
        display_name: 'ASC'
      }
    },
    onCompleted: (response) => {
      setSearchResults(response.listFeatures.features)
    }
  })
  
  useEffect(() => {
    if (search) {
      getAndSetFeaturesBySearch()
    }
  }, [search])

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
