import { useAllPokemon } from "../common/apollo/hooks/use-all-pokemon.js"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import pokeball from "../common/img/pokeball.gif"
import Picture from "../common/components/pokemon-picture.js"
import styled from "styled-components"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

const Name = styled.p`
	display: flex;
	color: #000;
	justify-content: center;
	align-items: center;
`

const MainContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`

const PokemonSquare = styled.div`
	padding: 0.75rem;
`

export default function Stats() {
	const { loading, errors, allPokemonStats } = useAllPokemon()
	console.log(allPokemonStats)
	let pokemonTypeOptions = [...new Set(allPokemonStats.map((item) => item.pokemonType))]
	// const [filteredPokemon, setFilteredPokemon] = useState([])
	const [filterType, setPokemonType] = useState("all")
	// const [filterLegendary, setPokemonLegendary] = useState("all")
	// const [filterHp, setPokemonHp] = useState("all")
	// let pokemonLegendaryOptions = ["true", "false"]
	// let pokemonHPOptions = ["35", "50", "65", "80", "95", "105"]

	const filteredPokemon = allPokemonStats.filter(function (pokemon) {
		if (filterType === "all") {
			return pokemon
		} else {
			return pokemon.pokemonType === filterType
		}
	})

	console.log("wowowowwo", filteredPokemon)

	useEffect(() => {
		if (!loading && !errors) {
			console.log({ loading, errors })
			// setFilteredPokemon(allPokemonStats)
		}
	}, [loading, errors])

	if (errors) {
		return <div>Oops</div>
	}

	if (loading) {
		return <img src={pokeball} alt="loading" style={{ width: "225px" }} data-testid="pokeball-loading-gif" />
	}

	console.log(filteredPokemon)

	const filterByType = (type) => {
		console.log(type)
		// console.log(type.value.toLowerCase())
		setPokemonType(type.value.toLowerCase())
		// if (type.value.toLowerCase() === "all") {
		// 	setFilteredPokemon(allPokemonStats)
		// } else {
		// 	// changing "allPokemonStats" to "filteredPokemon" kinda makes this work
		// 	const newFilter = allPokemonStats.filter((pokemon) => pokemon.pokemonType === type.value.toLowerCase())
		// 	setFilteredPokemon(newFilter)
		// }
	}

	// const filterByLegendary = (isLegendary) => {
	// 	console.log(isLegendary.value)
	// 	setPokemonLegendary(isLegendary.value)
	// 	// if (isLegendary.value.toLowerCase() === "all" || isLegendary.value === "false") {
	// 	// 	setFilteredPokemon(allPokemonStats)
	// 	// } else {
	// 	// 	// changing "allPokemonStats" to "filteredPokemon" kinda makes this work
	// 	// 	const newFilter = allPokemonStats.filter((pokemon) => pokemon.pokemonIsLegendary)
	// 	// 	setFilteredPokemon(newFilter)
	// 	// }
	// }

	// const filterByHP = (HP) => {
	// 	setPokemonHp(HP.value)
	// 	// if (HP.value.toLowerCase() === "all") {
	// 	// 	console.log("equal all")
	// 	// 	setFilteredPokemon(allPokemonStats)
	// 	// } else {
	// 	// 	console.log("not equal all")
	// 	// 	const newFilter = allPokemonStats.filter((pokemon) => pokemon.pokemonHP >= HP.value)
	// 	// 	setFilteredPokemon(newFilter)
	// 	// }
	// }

	// console.log({ filterType, filterHp, filterLegendary })
	return (
		<>
			<Dropdown
				options={["all", ...pokemonTypeOptions]}
				onChange={(value) => {
					filterByType(value)
					// setPokemonType(value.value.toLowerCase())
				}}
				value={"all"}
				placeholder="Select an option"
			/>
			{/* <Dropdown
				options={["all", ...pokemonLegendaryOptions]}
				onChange={(value) => filterByLegendary(value)}
				value={"all"}
				placeholder="Select an option"
			/>
			<Dropdown
				options={["all", ...pokemonHPOptions]}
				onChange={(value) => filterByHP(value)}
				value={"all"}
				placeholder="Select an option"
			/> */}
			<MainContent>
				{filteredPokemon.map((poke) => (
					<PokemonSquare key={poke.pokedexId} data-testid={`home-page-card-${poke.pokemonName}`}>
						<Link to={`/pokemon/${poke.pokedexId}`}>
							<Name data-testid={`home-page-name-${poke.pokemonName}`}>
								{poke.pokedexId}. {poke.capitalizedPokemonName}
							</Name>
							<Picture name={poke.pokemonName} />
						</Link>
					</PokemonSquare>
				))}
			</MainContent>
		</>
	)
}
