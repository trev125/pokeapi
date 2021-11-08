import { Link } from "react-router-dom"
import { CgPokemon, CgGames } from "react-icons/cg"
import { BsFillBarChartFill } from "react-icons/bs"
import styled from "styled-components"
import { IconContext } from "react-icons"

const CenterdContent = styled.div`
	display: flex;
	justifycontent: center;
	alignitems: center;
`

const CenterdContentTitle = styled.div`
	text-align: center;
	font-size: 2em;
	margin-left: 10px;
`

const IconLink = styled(Link)`
	color: grey;
	&:hover {
		color: #005993;
	}
`

export default function Home() {
	return (
		<CenterdContent>
			<IconContext.Provider value={{ size: "20em" }}>
				<IconLink to={"/rpg/"} data-testid="rpg-link">
					<CgGames />
					<CenterdContentTitle>RPG</CenterdContentTitle>
				</IconLink>
				<IconLink to={"/pokemon/25"} data-testid="pokemon-link">
					<CgPokemon />
					<CenterdContentTitle>Pokemon</CenterdContentTitle>
				</IconLink>
				<IconLink to={"/stats/"} data-testid="stats-link">
					<BsFillBarChartFill />
					<CenterdContentTitle>Stats</CenterdContentTitle>
				</IconLink>
			</IconContext.Provider>
		</CenterdContent>
	)
}
