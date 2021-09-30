import { useAllPokemon } from "../common/apollo/hooks/use-all-pokemon.js"
import pokeball from "../common/img/pokeball.gif"
import Picture from "../common/components/pokemon-picture.js"
import styled from "styled-components"

const Name = styled.p`
	color: #000;
`

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
			<div className="d-flex flex-wrap">
				{allPokemonStats.map((poke) => (
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
