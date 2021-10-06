import { useAllPokemon } from "../common/apollo/hooks/use-all-pokemon.js"
import { useState, useEffect } from "react"
import pokeball from "../common/img/pokeball.gif"
import Picture from "../common/components/pokemon-picture.js"
import styled from "styled-components"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

const Name = styled.p`
	color: #000;
`

export default function Home() {
	const { loading, errors, allPokemonStats } = useAllPokemon()
	console.log(allPokemonStats)
	let options = [...new Set(allPokemonStats.map((item) => item.pokemonType))]
	// options.unshift("all")
	const [filteredPokemon, setFilteredPokemon] = useState([])

	useEffect(() => {
		if (!loading && !errors) {
			console.log({ loading, errors })
			setFilteredPokemon(allPokemonStats)
		}
	}, [loading, errors])

	if (errors) {
		return <div>Oops</div>
	}

	if (loading) {
		return <img src={pokeball} alt="loading" style={{ width: "225px" }} />
	}

	function filterByType(type) {
		console.log(type.value.toLowerCase())
		if (type.value.toLowerCase() === "all") {
			setFilteredPokemon(allPokemonStats)
		} else {
			const newFilter = allPokemonStats.filter((pokemon) => pokemon.pokemonType === type.value.toLowerCase())
			setFilteredPokemon(newFilter)
		}
	}

	// console.log({ filteredPokemon, allPokemonStats })

	return (
		<>
			<Dropdown
				options={["all", ...options]}
				onChange={(value) => filterByType(value)}
				value={"all"}
				placeholder="Select an option"
			/>
			<div className="d-flex flex-wrap">
				{filteredPokemon.map((poke) => (
					<div key={poke.pokedexId} className="p-1">
						<a href={`/pokemon/${poke.pokedexId}`}>
							<Name className="d-flex justify-content-center">
								{poke.pokedexId}. {poke.capitalizedPokemonName}
							</Name>
							<Picture name={poke.pokemonName} />
						</a>
					</div>
				))}
			</div>
		</>
	)
}
