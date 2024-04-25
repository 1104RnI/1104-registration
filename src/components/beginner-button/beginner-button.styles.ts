import styled from 'styled-components'

export const BeginnerButtonContainer = styled.button`
	width: auto;

	all: unset;
	cursor: pointer;

	display: inline-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;

	padding: 1.25rem 1.25rem;
	border-radius: 2rem;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	background-color: #f5f9e1;

	text-align: left;
	text-decoration: underline;

	#icon {
		font-size: 1.5rem;
	}
`
