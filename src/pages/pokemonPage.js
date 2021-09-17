import React from "react"
import Card from "../components/Card/MainCard.js"
import { useParams, useHistory } from "react-router-dom"

export default function PokemonPage() {
	let { id } = useParams()
	const history = useHistory()
	function handleClick() {
		id++
		history.push("/pokemon/" + id)
	}
	return (
		<>
			<Card pokemonId={id}></Card>
			<button type="button" onClick={handleClick}>
				Go to next Pokemon!
			</button>
		</>
	)
}
