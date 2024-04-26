import styled from 'styled-components'

export const ExchangeButtonContainer = styled.button`
	all: unset;
	cursor: pointer;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	display: flex;
	align-items: center;
	gap: 0.5rem;

	border-radius: 1rem;

	padding: 1.25rem 1.25rem 1.25rem 1rem;
	background-color: #e9e9e9;

	text-align: left;

	span {
		width: 100%;
	}

	#icon {
		font-size: 1.25rem;
		color: #666666;
	}
`
