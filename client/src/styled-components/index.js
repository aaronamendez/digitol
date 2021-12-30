import styled from 'styled-components';

// Button
export const Button = styled.button`
	color: white;
	background-color: transparent;
	border: 1px solid white;
	border-radius: 0.5em;
	cursor: pointer;
	font-size: 1em;
	margin-left: 1em;
	padding: 0.5em;
	transition: color, background-color 0.5s;

	&:hover {
		background-color: white;
		color: black;
	}
`;

export const Input = styled.input`
	color: black;
	border: 1px solid white;
	border-radius: 0.5em;
	font-size: 1em;
	padding: 0.5em;
`;
