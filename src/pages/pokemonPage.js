import React from "react"
import Card from "../components/Card/MainCard.js"
import { useParams } from "react-router-dom"

export default function PokemonPage() {
	let { id } = useParams()
	return (
		<>
			<Card pokemonId={id}></Card>
			{/* <div>${pikachuStats}</div> */}
		</>
	)
}
