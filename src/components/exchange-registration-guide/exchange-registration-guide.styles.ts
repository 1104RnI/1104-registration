import styled from 'styled-components'

export const ExchangeRegistrationGuideContainer = styled.div`
	position: absolute;
	width: 100%;

	display: flex;
	flex-direction: column;

	top: 0;
	left: 0;
	width: 100%;
	height: auto;

	background-color: white;
	text-align: left;

	padding: 1.5rem;

	z-index: 9999;

	div#notion-page {
		width: 100%;
		height: auto;

		background-color: white;
		text-align: left;
	}

	#button {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
	}
`
