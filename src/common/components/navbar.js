import { Link } from "react-router-dom"
import PokemonLogo from "../img/pokemon-logo.png"

const NavBar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link data-testid="nav-pikachu-link" to="/">
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
	)
}

export default NavBar
