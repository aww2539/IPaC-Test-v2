import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'src/graphql/schema/schema.graphql',
  documents: ['src/graphql/queries/listCategories.graphql', 'src/graphql/queries/listFeatures.graphql'],
  generates: {
    'src/graphql/__generated__/types.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
}
 
export default config