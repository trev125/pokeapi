import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import PokemonLogo from "../common/img/pokemon-logo.png"
import PokemonPage from "../pages/pokemonPage"
import Home from "../pages/Home"

export default function RouterComponent() {
	return (
		<Router>
			<nav className="navbar navbar-light bg-light" data-testid="navbar">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link data-testid="nav-home-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link data-testid="nav-pikachu-link" to="/pokemon/25">
							Pikachu
						</Link>
					</li>
				</ul>
				<Link data-testid="nav-home-logo-link" to="/" className="navbar-brand">
					<img src={PokemonLogo} width="100" className="d-inline-block align-top" alt="" />
				</Link>
			</nav>
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
