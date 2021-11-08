/* eslint-disable react/prop-types */
import styled from "styled-components"
import { spaceToDash } from "../utils"

const ButtonStyle = styled.button`
	background-color: #828282;
`

const Button = ({ text, handleClick }) => (
	<ButtonStyle
		data-testid={`${spaceToDash(text)}-button`}
		className="btn btn-outline-dark btn-sm"
		onClick={handleClick}
	>
		{text}
	</ButtonStyle>
)

export default Button
