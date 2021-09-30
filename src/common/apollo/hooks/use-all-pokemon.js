import { gql, useQuery } from "@apollo/client"

export const GET_FIRST_151_POKEMON = gql`
	query {
		pokemon_v2_pokemonspecies(limit: 151, offset: 0, order_by: { id: asc }) {
			id
			name
			pokemon_v2_pokemoncolor {
				name
				id
			}
			pokemon_v2_pokemons(limit: 1) {
				height
				weight
				pokemon_v2_pokemonmoves(
					limit: 2
					where: { pokemon_v2_move: { pokemon_v2_type: { name: { _neq: "normal" } } } }
				) {
					pokemon_v2_move {
						id
						name
						move_effect_chance
						accuracy
						pp
						power
						pokemon_v2_type {
							id
							name
						}
					}
				}
				pokemon_v2_pokemonstats {
					base_stat
					pokemon_v2_stat {
						id
						name
					}
				}
				pokemon_v2_pokemontypes(limit: 1) {
					pokemon_v2_type {
						id
						name
					}
				}
			}
			pokemon_v2_pokemonspeciesflavortexts(where: { language_id: { _eq: 9 } }, limit: 1) {
				pokemon_species_id
				language_id
				flavor_text
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
			capitalizedPokemonName: poke?.name?.[0].toUpperCase() + poke?.name.substring(1),
		}
		return pokemonStats
	})

	console.log(allPokemonStats)

	return {
		data,
		loading,
		errors,
		allPokemonStats,
		rest,
	}
}
