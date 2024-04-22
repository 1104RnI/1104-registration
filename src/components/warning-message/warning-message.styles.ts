import styled from 'styled-components'

export const WarningMessageContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;

	background-color: rgba(255, 0, 0, 0.1);
	padding: 0.75rem;
	border-radius: 0.5rem;

	color: red;
	font-size: 0.875rem;
	text-align: left;

	#icon {
		font-size: 1rem;
		line-height: 150%;
		padding: 0.25rem;
		padding-left: 0;
	}
`
