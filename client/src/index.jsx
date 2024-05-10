import { ApolloProvider } from '@apollo/client';
import App from './App';
import GQLClient from './graphql/GQLClient'
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={GQLClient}>
        <App />
    </ApolloProvider>
);
