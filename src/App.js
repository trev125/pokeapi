import "./index.css"
import React from "react"
import RouterComponent from "./common/Router"
import { ApolloProvider } from "@apollo/client"
import { createApolloClient } from "./common/apollo/apollo-client.js"

export const apolloClient = createApolloClient()

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<RouterComponent />
		</ApolloProvider>
	)
}
