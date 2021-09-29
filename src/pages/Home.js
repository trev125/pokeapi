import { useAllPokemon } from "../common/apollo/hooks/use-all-pokemon.js"
import pokeball from "../common/img/pokeball.gif"

export default function Home() {
	const { loading, errors, allPokemonStats } = useAllPokemon()

	if (errors) {
		return <div>Oops</div>
	}

	if (loading) {
		return <img src={pokeball} alt="loading" style={{ width: "225px" }} />
	}

	return (
		<>
			{allPokemonStats.map((poke) => (
				<div key={poke.pokedexId}>
					<a href={`/pokemon/${poke.pokedexId}`}>{poke.pokemonName}</a>
				</div>
			))}
		</>
	)
}
