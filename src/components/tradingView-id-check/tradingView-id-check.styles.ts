import styled from 'styled-components'

export const TradingViewIdCheckContainer = styled.form`
	width: 100%;

	max-width: 37.5rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;

	div#button-label-container {
		width: 100%;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		label {
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
	}
`
