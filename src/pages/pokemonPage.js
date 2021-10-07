import Card from "../common/components/pokemon-card.js"
import pokeball from "../common/img/pokeball.gif"
import "../common/style.css"
import { useParams, useHistory } from "react-router-dom"
import { usePokemon } from "../common/apollo/hooks/use-pokemon.js"
import Button from "../common/components/button.js"

export default function PokemonPage() {
	let { id } = useParams()
	const history = useHistory()
	const { loading, errors, pokemonStats } = usePokemon(id)

	function goToNext() {
		id++
		history.push("/pokemon/" + id)
	}

	function goToPrev() {
		id--
		history.push("/pokemon/" + id)
	}

	if (loading) {
		return <img src={pokeball} alt="loading" style={{ width: "225px" }} data-testid="pokeball-loading-gif" />
	}

	if (errors) {
		return <div>Oops</div>
	}

	if (pokemonStats.pokedexId === 1) {
		return (
			<>
				<Card pokemon={pokemonStats} loading={loading}></Card>
				<Button text="Go to next Pokemon" handleClick={goToNext} />
			</>
		)
	} else {
		return (
			<>
				<Card pokemon={pokemonStats} loading={loading}></Card>
				<Button text="Go to previous Pokemon" handleClick={goToPrev} />
				<Button text="Go to next Pokemon" handleClick={goToNext} />
			</>
		)
	}
}
