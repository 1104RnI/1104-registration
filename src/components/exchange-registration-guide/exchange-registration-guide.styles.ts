import styled from 'styled-components'

export const ExchangeRegistrationGuideContainer = styled.div`
	position: absolute;
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	top: 0;
	left: 0;
	width: 100%;
	height: auto;

	background-color: white;
	text-align: left;

	padding: 3rem 1rem 4rem 1rem;

	z-index: 9999;

	h4 {
		padding: 0 0.5rem;
	}

	div#notion-page {
		width: 100%;
		height: auto;

		background-color: white;
		text-align: left;
	}

	#bottom-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;

		padding: 1rem 1.5rem 1.5rem 1.5rem;
		box-sizing: border-box;
		background-color: #ffffff;

		#button {
			width: 100%;
			box-sizing: border-box;
		}
	}
`
