import { NavLink } from "react-router-dom"
import PokemonLogo from "../img/pokemon-logo.png"
import styled from "styled-components"

export const Nav = styled.nav`
	font-size: 18px;
	position: sticky;
	top: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`

export const NavLogoContainer = styled(NavLink)`
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.08);
	}
`

export const NavLogo = styled.img`
	width: 100px;
`

export const Menu = styled.ul`
	display: flex;
	align-items: center;
	text-align: center;
`

export const MenuItem = styled.li`
	list-style: none;
`

export const MenuLink = styled(NavLink)`
	text-decoration: none;
	font-weight: bold;
	font-size: 2rem;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 0rem 2rem;
	transition: all 0.2s ease;
	&:hover {
		color: #005993;
		transform: traslateY(-3rem);
	}
`

export const Navigation = () => {
	return (
		<Nav>
			<NavLogoContainer data-testid="nav-home-logo-link" to="/">
				<NavLogo src={PokemonLogo} alt="Pokemon Logo" />
			</NavLogoContainer>
			<Menu>
				<MenuItem data-testid="nav-rpg-link">
					<MenuLink to="/rpg/">RPG</MenuLink>
				</MenuItem>
				<MenuItem data-testid="nav-stats-link">
					<MenuLink to="/stats/">Stats</MenuLink>
				</MenuItem>
			</Menu>
		</Nav>
	)
}

export default Navigation
