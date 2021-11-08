import "./index.css"
import React from "react"
import Routes from "./common/Router"
import Navigation from "./common/components/navigation"
import { ApolloProvider } from "@apollo/client"
import { createApolloClient } from "./common/apollo/apollo-client.js"
import { BrowserRouter as Router } from "react-router-dom"

export const apolloClient = createApolloClient()

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<Router>
				<Navigation />
				<Routes />
			</Router>
		</ApolloProvider>
	)
}
