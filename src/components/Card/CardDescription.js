import React from "react"
import styled from "styled-components"

const Description = styled.p`
	color: #fff;
	font-weight: 300;
	border: solid 3px #000000;
	margin: 10px;
`

const CardDescription = ({ pokemonData }) => {
	return (
		<Description className="d-flex justify-content-center p-1">
			{pokemonData.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text}
		</Description>
	)
}

export default CardDescription
