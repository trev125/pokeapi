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
		return <img src={pokeball} alt="loading" style={{ width: "225px" }} data-testid="pokeball-loading-gif" />
	}

	const filterByType = (type) => {
		console.log(type.value.toLowerCase())
		if (type.value.toLowerCase() === "all") {
			setFilteredPokemon(allPokemonStats)
		} else {
			const newFilter = allPokemonStats.filter((pokemon) => pokemon.pokemonType === type.value.toLowerCase())
			setFilteredPokemon(newFilter)
		}
	}

	return (
		<>
			<Dropdown
				options={["all", ...options]}
				onChange={(value) => filterByType(value)}
				value={"all"}
				placeholder="Select an option"
			/>
			<div className="d-flex flex-wrap" data-testid="pokemon-home-page-wrapper">
				{filteredPokemon.map((poke) => (
					<div key={poke.pokedexId} className="p-1" data-testid={`home-page-card-${poke.pokemonName}`}>
						<a href={`/pokemon/${poke.pokedexId}`}>
							<Name className="d-flex justify-content-center" data-testid={`home-page-name-${poke.pokemonName}`}>
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
