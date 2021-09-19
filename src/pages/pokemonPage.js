import { React, useState } from "react"
import Card from "../components/Card/MainCard.js"
import { useParams, useHistory } from "react-router-dom"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GET_POKEMON_STATS } from "../query.js"

const client = new ApolloClient({
	uri: "https://beta.pokeapi.co/graphql/v1beta",
	cache: new InMemoryCache(),
})

export default function PokemonPage() {
	let { id } = useParams()
	const history = useHistory()
	const [pokemon, setPokemon] = useState({})
	const [loading, setLoading] = useState(true)
	client
		.query({
			query: GET_POKEMON_STATS,
			variables: { pokemonId: id },
		})
		.then((result) => {
			setPokemon(result.data.pokemon_v2_pokemonspecies[0])
			setLoading(false)
		})
	function goToNext() {
		id++
		history.push("/pokemon/" + id)
	}
	function goToPrev() {
		id--
		history.push("/pokemon/" + id)
	}
	if (loading) {
		return <div>Loading...</div>
	}
	return (
		<>
			<Card pokemon={pokemon}></Card>
			<button type="button" onClick={goToPrev}>
				Go to previous Pokemon!
			</button>
			<button type="button" onClick={goToNext}>
				Go to next Pokemon!
			</button>
		</>
	)
}
