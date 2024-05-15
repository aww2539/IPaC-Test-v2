import { useQuery } from '@apollo/client'
import { listCategoriesQuery } from '../graphql/queries/listCategories'

// maybe rename this file to hooks.ts?
export const useGetCurrentCategories = () => {
  const { data, loading, error } = useQuery(listCategoriesQuery, { variables: {
    filter: {
      not: {
        name: {
          contains: "DEPRECATED"
        }
      }
    }
  }})

  return { categoryData: data?.listCategories.categories, loading, error }
}