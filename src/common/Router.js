import { Switch, Route } from "react-router-dom"
import PokemonPage from "../pages/pokemonPage"
import RPG from "../pages/rpgPage"
import Stats from "../pages/statsPage"
import Home from "../pages/Home"

export const Routes = () => {
	return (
		<Switch>
			<Route path="/pokemon/:id">
				<PokemonPage />
			</Route>
			<Route path="/rpg/">
				<RPG />
			</Route>
			<Route path="/stats/">
				<Stats />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	)
}

export default Routes
