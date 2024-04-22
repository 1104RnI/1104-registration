import styled from 'styled-components'

export const PersonalInfoInputsContainer = styled.form`
	width: 100%;

	max-width: 37.5rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;

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
`
