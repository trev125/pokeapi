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

const TopBar = styled.span`
	font-family: Arial, Helvetica, sans-serif;
`

const Name = styled.p`
	color: #fff;
`

const Id = styled.p`
	color: #e8e8e8;
`

const TypeIcon = styled.p`
	color: #7a7a7a;
`

const updatePokemonTypeIcon = function (pokemonData) {
	switch (pokemonData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name) {
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

const TopCard = ({ pokemonData }) => {
	const capitalizedName = pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1)
	return (
		<TopBar className="d-flex justify-content-between">
			<Id className="p-2">no. {pokemonData.id}</Id>
			<Name className="p-2">{capitalizedName}</Name>
			<TypeIcon className="p-2 ml-auto">
				{updatePokemonTypeIcon(pokemonData)} &nbsp;
				{pokemonData.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats[0].base_stat} HP
			</TypeIcon>
		</TopBar>
	)
}

export default TopCard
