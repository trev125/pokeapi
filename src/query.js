import { gql } from "@apollo/client"

export const GET_POKEMON_STATS = gql`
	query ($pokemonId: Int) {
		pokemon_v2_pokemonspecies(where: { id: { _eq: $pokemonId } }) {
			id
			name
			pokemon_v2_pokemoncolor {
				name
				id
			}
			pokemon_v2_pokemons(where: { pokemon_species_id: { _eq: $pokemonId } }, limit: 1) {
				height
				weight
				pokemon_v2_pokemonmoves(limit: 2) {
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
			pokemon_v2_pokemonspeciesflavortexts(
				where: { pokemon_species_id: { _eq: $pokemonId }, _and: { language_id: { _eq: 9 } } }
				limit: 1
			) {
				pokemon_species_id
				language_id
				flavor_text
			}
		}
	}
`
