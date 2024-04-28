import styled from 'styled-components'

export const AssetManagementSelectorContainer = styled.form`
	width: 100%;

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

			label#custom-input-label {
				position: relative;

				display: flex;
				align-items: center;
				width: 100%;

				#icon {
					position: absolute;
					right: 0.875rem;

					font-size: 1.5rem;
					color: #000000;
				}
			}
		}
	}
`
