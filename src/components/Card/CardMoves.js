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
	let pokemonMove1
	let pokemonMove2
	pokemonData.pokemon_v2_pokemons[0].pokemon_v2_pokemonmoves.forEach((move) => {
		if (move.pokemon_v2_move.pokemon_v2_type.name !== "normal") {
			pokemonMove1 = move.pokemon_v2_move
		}
		if (move.pokemon_v2_move.pokemon_v2_type.name === "normal") {
			pokemonMove2 = move.pokemon_v2_move
		}
	})

	return (
		<>
			<MoveOutline className="d-flex justify-content-between p-1">
				<MovePower className="m-1">
					{updatePokemonTypeIcon(pokemonMove1.pokemon_v2_type.name)}&nbsp;
					{pokemonMove1.pp}&frasl;{pokemonMove1.pp}
				</MovePower>
				<MoveName className="m-1">{pokemonMove1.name}</MoveName>
				<MovePower className="m-1">{pokemonMove1.power}</MovePower>
			</MoveOutline>
			<MoveOutline className="d-flex justify-content-between p-1">
				<MovePower className="m-1">
					{updatePokemonTypeIcon(pokemonMove2.pokemon_v2_type.name)}&nbsp;
					{pokemonMove2.pp}&frasl;{pokemonMove2.pp}
				</MovePower>
				<MoveName className="m-1">{pokemonMove2.name}</MoveName>
				<MovePower className="m-1">{pokemonMove2.power}</MovePower>
			</MoveOutline>
		</>
	)
}

export default CardMoves
