import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const GQLClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.API_URL,
        headers: {
          'x-api-key': `${process.env.API_KEY}`,
        }
    })
});

export default GQLClient