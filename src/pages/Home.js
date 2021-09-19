import { React, useState } from "react"
import Card from "../components/Card/MainCard.js"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GET_FIRST_100_POKEMON } from "../query.js"

const client = new ApolloClient({
	uri: "https://beta.pokeapi.co/graphql/v1beta",
	cache: new InMemoryCache(),
})

export default function Home() {
	const [pokemon, setPokemon] = useState([])
	const [loading, setLoading] = useState(true)
	client
		.query({
			query: GET_FIRST_100_POKEMON,
		})
		.then((result) => {
			setPokemon(result.data.pokemon_v2_pokemonspecies)
			setLoading(false)
		})

	let pokemonList = []
	pokemon.forEach((poke, index) => {
		pokemonList.push(<Card key={index} pokemon={poke} className="p-2"></Card>)
	})

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<div className="d-flex flex-wrap">{pokemonList}</div>
			{/* <Card pokemon={pokemon}></Card> */}
		</>
	)
}
