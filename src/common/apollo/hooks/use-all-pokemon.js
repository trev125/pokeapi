import { gql, useQuery } from "@apollo/client"

export const GET_FIRST_151_POKEMON = gql`
	query {
		pokemon_v2_pokemonspecies(limit: 151, offset: 0, order_by: { id: asc }) {
			id
			name
			is_legendary
			pokemon_v2_pokemons {
				pokemon_v2_pokemontypes(limit: 1) {
					pokemon_v2_type {
						id
						name
					}
				}
			}
		}
	}
`

export const useAllPokemon = () => {
	const { data, loading, errors, ...rest } = useQuery(GET_FIRST_151_POKEMON)

	const pokemon = data?.pokemon_v2_pokemonspecies ?? []

	const allPokemonStats = pokemon.map((poke) => {
		const pokemonStats = {
			pokedexId: poke?.id,
			pokemonName: poke?.name,
			pokemonIsLegendary: poke?.is_legendary,
			pokemonType: poke?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemontypes[0]?.pokemon_v2_type?.name,
			capitalizedPokemonName: poke?.name?.[0].toUpperCase() + poke?.name.substring(1),
		}
		return pokemonStats
	})

	//console.log(allPokemonStats)

	return {
		data,
		loading,
		errors,
		allPokemonStats,
		rest,
	}
}
