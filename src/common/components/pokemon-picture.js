import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"
import pokeball from "../img/pokeball.gif"

const PokemonPicture = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	border: solid 3px #000000;
	margin: 10px;
	background-color: #828282;
`

const PokemonImage = styled.img`
	width: 225px;
`

const apiUrl = "https://pokeapi.co/api/v2/"

const Picture = ({ name }) => {
	const [img, setImg] = useState(pokeball)
	useEffect(() => {
		axios.get(apiUrl + `pokemon/${name}`).then((response) => {
			setImg(response.data.sprites.other["official-artwork"].front_default)
		})
	}, [name])

	return (
		<PokemonPicture data-testid={`${name}-picture-outline`} className="d-flex justify-content-center">
			<PokemonImage data-testid={`${name}-picture`} src={img} alt={name} />
		</PokemonPicture>
	)
}

export default Picture
