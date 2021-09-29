import styled from "styled-components"
import "../../common/style.css"
import { useState, useEffect } from "react"
import pokeball from "../img/pokeball.gif"
import axios from "axios"
import {
	GiPowerLightning,
	GiWaterDrop,
	GiSolidLeaf,
	GiFire,
	GiRock,
	GiSpottedBug,
	GiPoisonBottle,
	GiGroundbreaker,
	GiFairyWand,
	GiBirdMask,
	GiFist,
	GiPsychicWaves,
	GiMeltingIceCube,
	GiGhost,
	GiSpikedDragonHead,
	GiPapers,
} from "react-icons/gi"

function colorNameToHex(color) {
	var colors = {
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#808080",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#006400",
		greenyellow: "#adff2f",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgrey: "#d3d3d3",
		lightgreen: "#90ee90",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370d8",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#d87093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#e8a2ae",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		rebeccapurple: "#663399",
		red: "#8b0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		steelblue: "#4682b4",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		tomato: "#ff6347",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#006400",
		whitesmoke: "#f5f5f5",
		yellow: "#daa520",
		yellowgreen: "#9acd32",
	}

	if (typeof colors[color.toLowerCase()] != "undefined") {
		return colors[color.toLowerCase()]
	}

	return false
}

const updatePokemonTypeIcon = function (type) {
	switch (type) {
		case "water":
			return <GiWaterDrop />
		case "grass":
			return <GiSolidLeaf />
		case "electric":
			return <GiPowerLightning />
		case "fire":
			return <GiFire />
		case "rock":
			return <GiRock />
		case "bug":
			return <GiSpottedBug />
		case "poison":
			return <GiPoisonBottle />
		case "ground":
			return <GiGroundbreaker />
		case "fairy":
			return <GiFairyWand />
		case "flying":
			return <GiBirdMask />
		case "fighting":
			return <GiFist />
		case "psychic":
			return <GiPsychicWaves />
		case "ice":
			return <GiMeltingIceCube />
		case "ghost":
			return <GiGhost />
		case "dragon":
			return <GiSpikedDragonHead />
		case "normal":
			return <GiPapers />
		default:
			return <GiPapers />
	}
}

const Description = styled.p`
	color: #fff;
	font-weight: 300;
	border: solid 3px #000000;
	margin: 10px;
`

const CardOutline = styled.div`
	width: 375px;
	height: 500px;
	background-color: ${(props) => (props.color ? colorNameToHex(props.color) : "grey")};
	margin: 2px;
`

const MoveName = styled.p`
	color: #fff;
	font-weight: 300;
	margin-left: 10px;
`

const MoveOutline = styled.div`
	color: #fff;
	font-weight: 300;
	margin: 5px;
	border-bottom: solid 3px #000000;
`

const MovePower = styled.p`
	color: #fff;
	font-weight: 300;
	margin-right: 10px;
`

const PokemonPicture = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	border: solid 3px #000000;
	margin: 10px;
	background-color: #828282;
`

const PokemonImage = styled.img`
	width: 225px;
`

const TopBar = styled.span`
	font-family: Arial, Helvetica, sans-serif;
`

const Name = styled.p`
	color: #fff;
`

const Id = styled.p`
	color: #e8e8e8;
`

const TypeIcon = styled.p`
	color: #e8e8e8;
`

const apiUrl = "https://pokeapi.co/api/v2/"

const Card = ({ pokemon }) => {
	const capitalizedName = pokemon.pokemonName[0].toUpperCase() + pokemon.pokemonName.substring(1)
	const [img, setImg] = useState(pokeball)
	useEffect(() => {
		axios.get(apiUrl + `pokemon/${pokemon.pokemonName}`).then((response) => {
			setImg(response.data.sprites.other["official-artwork"].front_default)
		})
	}, [pokemon])

	return (
		<CardOutline color={pokemon.pokeonColor}>
			<TopBar data-testid={`${pokemon.pokemonName}-topbar`} className="d-flex justify-content-between">
				<Id className="m-1">no. {pokemon.pokedexId}</Id>
				<Name className="m-1">{capitalizedName}</Name>
				<TypeIcon className="m-1 ml-auto">
					{updatePokemonTypeIcon(pokemon.pokemonType)} &nbsp;
					{pokemon.pokemonHP} HP
				</TypeIcon>
			</TopBar>
			<PokemonPicture data-testid={`${pokemon.pokemonName}-picture-outline`} className="d-flex justify-content-center">
				<PokemonImage data-testid={`${pokemon.pokemonName}-picture`} src={img} alt={pokemon.pokemonName} />
			</PokemonPicture>
			<MoveOutline
				data-testid={`${pokemon.pokemonName}-move-1`}
				key={pokemon.pokemonMove1.id}
				className="d-flex justify-content-between p-1"
			>
				<MovePower className="m-1">
					{updatePokemonTypeIcon(pokemon.pokemonMove1.pokemon_v2_type.name)}&nbsp;
					{pokemon.pokemonMove1.pp}&frasl;{pokemon.pokemonMove1.pp}
				</MovePower>
				<MoveName className="m-1">{pokemon.pokemonMove1.name}</MoveName>
				<MovePower className="m-1">{pokemon.pokemonMove1.power}</MovePower>
			</MoveOutline>
			<MoveOutline
				data-testid={`${pokemon.pokemonName}-move-2`}
				key={pokemon.pokemonMove2.id}
				className="d-flex justify-content-between p-1"
			>
				<MovePower className="m-1">
					{updatePokemonTypeIcon(pokemon.pokemonMove2.pokemon_v2_type.name)}&nbsp;
					{pokemon.pokemonMove2.pp}&frasl;{pokemon.pokemonMove2.pp}
				</MovePower>
				<MoveName className="m-1">{pokemon.pokemonMove2.name}</MoveName>
				<MovePower className="m-1">{pokemon.pokemonMove2.power}</MovePower>
			</MoveOutline>
			<Description data-testid={`${pokemon.pokemonName}-description`} className="d-flex justify-content-center p-1">
				{pokemon.pokemonFlavorText}
			</Description>
		</CardOutline>
	)
}

export default Card
