import styled from 'styled-components'

export const ExchangeSelectorContainer = styled.form`
	width: 100%;
	height: auto;

	max-width: 37.5rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;

	div#buttons-container {
		width: 100%;

		display: flex;
		flex-direction: column;

		gap: 1.5rem;

		div#input-container {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
`
