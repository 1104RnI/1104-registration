import styled from 'styled-components'

export const UidInputContainer = styled.form`
	width: 100%;

	max-width: 37.5rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;

	label {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 1.5rem;

		div#input-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		#submit-button {
			box-sizing: border-box;
			width: 100%;
		}
	}
`
