import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/navbar"
import PokemonPage from "../pages/pokemonPage"
import Home from "../pages/Home"

export default function RouterComponent() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/pokemon/:id">
					<PokemonPage />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}
