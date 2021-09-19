import React from "react"
import styled from "styled-components"
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

const MoveName = styled.p`
	color: #fff;
	font-weight: 300;
	margin-left: 10px;
`

const MoveOutline = styled.div`
	color: #fff;
	font-weight: 300;
	margin: 5px;
	border-bottom: solid 3px #000000;
`

const MovePower = styled.p`
	color: #fff;
	font-weight: 300;
	margin-right: 10px;
`

const updatePokemonTypeIcon = function (typeName) {
	switch (typeName) {
		case "water":
			return <GiWaterDrop />
		case "grass":
			return <GiSolidLeaf />
		case "electric":
			return <GiPowerLightning />
		case "fire":
			return <GiFire />
		case "rock":
			return <GiRock />
		case "bug":
			return <GiSpottedBug />
		case "poison":
			return <GiPoisonBottle />
		case "ground":
			return <GiGroundbreaker />
		case "fairy":
			return <GiFairyWand />
		case "flying":
			return <GiBirdMask />
		case "fighting":
			return <GiFist />
		case "psychic":
			return <GiPsychicWaves />
		case "ice":
			return <GiMeltingIceCube />
		case "ghost":
			return <GiGhost />
		case "dragon":
			return <GiSpikedDragonHead />
		case "normal":
			return <GiPapers />
		default:
			return <GiPapers />
	}
}

const CardMoves = ({ pokemonData }) => {
	let moves = []
	pokemonData.pokemon_v2_pokemons[0].pokemon_v2_pokemonmoves.forEach((move, index) => {
		console.log(move)
		moves.push(
			<MoveOutline key={index} className="d-flex justify-content-between p-1">
				<MovePower className="m-1">
					{updatePokemonTypeIcon(move.pokemon_v2_move.pokemon_v2_type.name)}&nbsp;
					{move.pokemon_v2_move.pp}&frasl;{move.pokemon_v2_move.pp}
				</MovePower>
				<MoveName className="m-1">{move.pokemon_v2_move.name}</MoveName>
				<MovePower className="m-1">{move.pokemon_v2_move.power}</MovePower>
			</MoveOutline>
		)
	})

	return moves
}

export default CardMoves
