import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const PokemonPicture = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	border: solid 3px #000000;
	margin: 10px;
	background-color: #828282;
`

const PokemonImage = styled.img`
	width: 225px;
`

const lodaingImg = "https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"

const CardPicture = ({ pokemonData }) => {
	const apiUrl = "https://pokeapi.co/api/v2/"
	const [img, setImg] = useState("")
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get(apiUrl + `pokemon/${pokemonData.name}`).then((response) => {
			setImg(response.data.sprites.other["official-artwork"].front_default)
			setLoading(false)
		})
	}, [pokemonData])

	if (loading) {
		return (
			<PokemonPicture className="d-flex justify-content-center">
				<PokemonImage src={lodaingImg} alt="pokeball" />
			</PokemonPicture>
		)
	}

	return (
		<PokemonPicture className="d-flex justify-content-center">
			<PokemonImage src={img} alt={pokemonData.name} />
		</PokemonPicture>
	)
}

export default CardPicture
