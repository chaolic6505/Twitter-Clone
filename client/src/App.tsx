import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
	HttpLink,
} from '@apollo/client';
import './App.css';
import User from './components/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import { setContext } from 'apollo-link-context';
import Signup from './pages/Signup';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });
const authLink = setContext(async (req, { headers }) => {
	const token = localStorage.getItem('token');

	return {
		...headers,
		headers: {
			Authorization: token ? `Bearer ${token}` : null,
		},
	};
});

const link = authLink.concat(httpLink as any);
const client = new ApolloClient({
	link: link as any,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Switch>
					<Route exact path="/">
						<User />
					</Route>
					<Route path="/landing">
						<Landing />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
