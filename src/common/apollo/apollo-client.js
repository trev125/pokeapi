import { ApolloClient, InMemoryCache } from "@apollo/client"

export const createApolloClient = () =>
	new ApolloClient({
		uri: "https://beta.pokeapi.co/graphql/v1beta",
		cache: new InMemoryCache(),
	})

export default createApolloClient
