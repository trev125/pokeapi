import Card from "../common/components/pokemon-card.js"
import pokeball from "../common/img/pokeball.gif"
import "../common/style.css"
import { useParams, useHistory } from "react-router-dom"
import { usePokemon } from "../common/apollo/hooks/use-pokemon.js"

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
		return <img src={pokeball} alt="loading" style={{ width: "225px" }} />
	}

	if (errors) {
		return <div>Oops</div>
	}

	return (
		<>
			<Card pokemon={pokemonStats} loading={loading}></Card>
			<button type="button" onClick={goToPrev}>
				Go to previous Pokemon!
			</button>
			<button type="button" onClick={goToNext}>
				Go to next Pokemon!
			</button>
		</>
	)
}
