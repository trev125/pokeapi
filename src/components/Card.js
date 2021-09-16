import React from "react"
import styled from "styled-components"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GET_POKEMON_STATS } from "../query"
import { useState, useEffect } from "react"
import {
	GiPowerLightning,
	GiWaterDrop,
	GiSolidLeaf,
	GiFire,
	GiRock,
	GiSpottedBug,
	GiPoisonBottle,
	GiGroundbreaker,
	GiFairyWand,
	GiBirdMask,
	GiFist,
	GiPsychicWaves,
	GiMeltingIceCube,
	GiGhost,
	GiSpikedDragonHead,
	GiPapers,
} from "react-icons/gi"

const client = new ApolloClient({
	uri: "https://beta.pokeapi.co/graphql/v1beta",
	cache: new InMemoryCache(),
})

const Name = styled.h2`
	color: #000;
	font-weight: 300;
	display: inline;
`

const Id = styled.h2`
	color: #454545;
	font-weight: 300;
	display: inline;
`

const Health = styled.h4`
	color: #aaa;
	font-weight: 300;
	display: inline;
`
const TypeIcon = styled.p`
	color: #fff;
	font-weight: 300;
	display: inline;
`

const Description = styled.p`
	color: #fff;
	font-weight: 300;
	border: solid 3px #000000;
`

const CardOutline = styled.div`
	width: 325px;
	height: 400px;
	background-color: ${(props) => (props.color ? props.color : "grey")};
	opacity: 0.7;
`

// let pokemon = {}

const Card = ({ pokemonId }) => {
	const [pokemon, setPokemon] = useState({})
	const [pokemonTypeIcon, setPokemonTypeIcon] = useState()
	const [loading, setLoading] = useState(true)
	client
		.query({
			query: GET_POKEMON_STATS,
			variables: { pokemonId: pokemonId },
		})
		.then((result) => {
			// ({
			// 	name: pokemon.name,
			// 	id: pokemon.id,
			// 	weight: pokemon.weight,
			// 	height: pokemon.height,
			// } = result.data.pokemon_v2_pokemon[0])
			setPokemon(result.data.pokemon_v2_pokemonspecies[0])
			// pokemon.id = result.data.pokemon_v2_pokemonspecies[0].id
			// pokemon.name = result.data.pokemon_v2_pokemonspecies[0].name
			// pokemon.weight = result.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].weight
			// pokemon.height = result.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].height
			// pokemon.movesArr = result.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemonmoves
			// pokemon.statsArr = result.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemonstats
			// pokemon.flavorText =
			// 	result.data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemonspeciesflavortexts[0].flavor_text

			// switch (pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name) {
			// 	case "water":
			// 		setPokemonTypeIcon(<GiWaterDrop />)
			// 		break
			// 	case "grass":
			// 		setPokemonTypeIcon(<GiSolidLeaf />)
			// 		break
			// 	default:
			// 		setPokemonTypeIcon(<GiPapers />)
			// }

			setLoading(false)
		})
	useEffect(() => {
		console.log(pokemon)
	})

	// console.log(pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name)

	// switch (pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name) {
	// 	case "water":
	// 		setPokemonTypeIcon(<GiWaterDrop />)
	// 		break
	// 	case "grass":
	// 		setPokemonTypeIcon(<GiSolidLeaf />)
	// 		break
	// 	default:
	// 		setPokemonTypeIcon(<GiPapers />)
	// }

	if (loading) {
		return <div>Loading...</div>
	}
	return (
		<CardOutline color={pokemon.pokemon_v2_pokemoncolor.name}>
			<span>
				<Id>{pokemon.id}</Id>
				<Name>{pokemon.name}</Name>
				<Health>{pokemon.pokemon_v2_pokemoncolor.name}</Health>
				<TypeIcon>
					{pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
					<GiPowerLightning />
				</TypeIcon>
			</span>
			<Description>{pokemon.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text}</Description>
		</CardOutline>
	)
}

export default Card
