import React from "react"
import styled from "styled-components"

const Move = styled.p`
	color: #fff;
	font-weight: 300;
	border: solid 3px #000000;
	margin: 10px;
`

const CardMoves = ({ pokemonData }) => {
	return (
		<>
			<Move className="d-flex justify-content-center">
				{pokemonData.pokemon_v2_pokemons[0].pokemon_v2_pokemonmoves[0].pokemon_v2_move.name}
			</Move>
			<Move className="d-flex justify-content-center">
				{pokemonData.pokemon_v2_pokemons[0].pokemon_v2_pokemonmoves[1].pokemon_v2_move.name}
			</Move>
		</>
	)
}

export default CardMoves
