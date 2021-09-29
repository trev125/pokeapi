import { gql, useQuery } from "@apollo/client"

const GET_POKEMON_STATS = gql`
	query ($pokemonId: Int) {
		pokemon_v2_pokemonspecies(where: { id: { _eq: $pokemonId } }) {
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
					distinct_on: move_learn_method_id
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

export const usePokemon = (pokemonId) => {
	// console.log(pokemonId)
	const { data, loading, errors, ...rest } = useQuery(GET_POKEMON_STATS, {
		variables: { pokemonId },
	})
	const currentPokemon = data?.pokemon_v2_pokemonspecies?.[0] ?? {}

	const pokemonStats = {
		pokedexId: currentPokemon?.id,
		pokemonName: currentPokemon?.name,
		pokeonColor: currentPokemon?.pokemon_v2_pokemoncolor?.name,
		pokemonHeight: currentPokemon?.pokemon_v2_pokemons?.[0]?.height,
		pokemonWeight: currentPokemon?.pokemon_v2_pokemons?.[0]?.weight,
		pokemonFlavorText: currentPokemon?.pokemon_v2_pokemonspeciesflavortexts?.[0]?.flavor_text,
		pokemonMove1: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonmoves?.[0]?.pokemon_v2_move,
		pokemonMove2: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonmoves?.[1]?.pokemon_v2_move,
		pokemonHP: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonstats?.[0]?.base_stat,
		pokemonATK: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonstats?.[1]?.base_stat,
		pokemonDEF: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonstats?.[2]?.base_stat,
		pokemonSPATK: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonstats?.[3]?.base_stat,
		pokemonSPDEF: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonstats?.[4]?.base_stat,
		pokemonSPD: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemonstats?.[5]?.base_stat,
		pokemonType: currentPokemon?.pokemon_v2_pokemons?.[0]?.pokemon_v2_pokemontypes?.[0]?.pokemon_v2_type?.name,
	}

	return {
		data,
		loading,
		errors,
		pokemonStats,
		...rest,
	}
}
