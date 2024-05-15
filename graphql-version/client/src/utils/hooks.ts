import { useQuery } from '@apollo/client'
import { listCategoriesQuery } from '../graphql/queries/listCategories'

export const useGetCurrentCategories = () => {
  const { data, loading, error } = useQuery(listCategoriesQuery, { variables: {
    filter: {
      not: {
        name: {
          contains: "DEPRECATED"
        }
      }
    },
    orderBy: {
      sort_order: 'ASC'
    }
  }})

  return { categoryData: data?.listCategories.categories, loading, error }
}