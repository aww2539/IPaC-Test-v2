import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const GQLClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://wfwg7jrvynfphcqfvnv6jnrhsu.appsync-api.us-east-1.amazonaws.com/graphql',
        headers: {
          'x-api-key': 'da2-wwgbrb7x6fhe5ox3t5ivyn4ome',
        }
    })
});

export default GQLClient