import styled from 'styled-components';

// Button
export const Button = styled.button`
	background-color: navy;
	color: white;
	border: 1px solid white;
	border-radius: 0.5em;
	cursor: pointer;
	font-size: 1em;
	margin-left: 1em;
	padding: 0.5em;
	transition: color, background-color 0.5s;

	&:hover {
		// border: 1px solid green;
		background-color: #57b55d;
		color: white;
	}

	@media (max-width: 500px) {
		margin-left: 0;
	}
`;

export const BackButton = styled.button`
	text-align: center;
	background-color: navy;
	color: white;
	border: 1px solid white;
	border-radius: 1em;
	cursor: pointer;
	font-size: 1em;
	padding: 1em;
	transition: color, background-color 0.5s;

	&:hover {
		// border: 1px solid green;
		background-color: #57b55d;
		color: white;
	}
`;

export const Input = styled.input`
	color: black;
	border: 1px solid white;
	border-radius: 0.5em;
	font-size: 1em;
	padding: 0.5em;

	@media (max-width: 500px) {
		margin-bottom: 0.5em;
	}
`;
